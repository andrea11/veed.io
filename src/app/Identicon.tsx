import {identicon} from "minidenticons";

type IdenticonProps = {
    username: string;
    saturation?: number;
    lightness?: number;
}

const defaultSaturation = 90;
const defaultLightness = 50;

export default function Identicon(props: IdenticonProps) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: identicon(
                    props.username,
                    props.saturation ?? defaultSaturation,
                    props.lightness ?? defaultLightness
                )
            }}
        />
    );
}