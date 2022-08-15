import { FormControlLabel } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';

interface Props extends UseControllerProps {
    label: string;
    disabled: boolean;
}

export default function AppCheckbox(props: Props) {
    const {field} = useController({...props, defaultValue: false});

    return (
        <FormControlLabel
            control={
                <Checkbox
                    {...field}
                    checked={field.value}
                    color='secondary'   
                    disabled={props.disabled}
                />
            }
            label={props.label}
        />
    )
}