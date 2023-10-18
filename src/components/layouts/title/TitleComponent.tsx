import { TitleProps } from './TitleComponent.types';
import {Typography,
} from '@mui/material';

export default function TitleComponent({ name, size }: TitleProps) {
    return (
        <Typography style={{ fontSize: size }}>
        {name}
      </Typography>
    );
}
