import DropdownSearch from "../components/Dropdown";
import Download from "../components/Download";
import { useState, useRef } from 'react';
import sportArray from '../data/sport.json';
import countryArray from '../data/country.json';
import playerArray from '../data/player.json';
import {
    Row,
    Col,
    Card,
} from "react-bootstrap";
import {
    rowMargin,
    cardBody,
    downloadButton,
} from "../styles/style";
import { handleImgError } from '../utils';

const PlayerSelector = () => {
    const [player, setPlayer] = useState({});
    const [sport, setSport] = useState({});
    const [country, setCountry] = useState({});
    const imgRef = useRef(null);

    return <Row style={rowMargin}>
        <Col lg={{ span: 8, offset: 2 }} sm={12}>
            <Card>
                <Card.Body style={cardBody}>
                    <Row style={rowMargin}>
                        <Col lg={4} sm={12}>
                            <DropdownSearch
                                buttonText={sport.name || 'Select Sport'}
                                items={sportArray}
                                onClick={setSport}
                            />
                        </Col>
                        <Col lg={4} sm={12}>
                            <DropdownSearch
                                buttonText={country.name || 'Select Country'}
                                items={countryArray}
                                onClick={setCountry}
                                disabled={!sport.name}
                            />
                        </Col>
                        <Col lg={4} sm={12}>
                            <DropdownSearch
                                buttonText={player.name || 'Select Player'}
                                items={playerArray?.filter(x => {
                                    return x.country_code === country.country_code && x.sport_code === sport.sport_code
                                }
                                )}
                                onClick={setPlayer}
                                disabled={!sport.name || !country.name}
                            />
                        </Col>
                    </Row>
                    <h1>{player.name || 'Select a Player'}</h1>
                    <img
                        src={player.url_image || '/'}
                        ref={imgRef}
                        alt={player.name}
                        style={{
                            maxWidth: '100%',
                            maxHeight: 400,
                        }}
                        onError={() => handleImgError(imgRef)}
                    />
                    <br />
                    {player.name && <Download
                        style={downloadButton}
                        url={player.url_image}
                    >
                        Download
                    </Download>}
                </Card.Body>
            </Card>
        </Col>
    </Row >
}

export default PlayerSelector;
