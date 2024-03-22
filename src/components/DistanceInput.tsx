import { FormControl, InputAdornment, TextField } from '@mui/material'
import React from 'react'

//React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export type DistanceInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    value: number
}

const DistanceInput: React.FC<DistanceInputProps> = ({onChange, value}) => {
  return (
    <FormControl sx={{ mt: 2 }}>
          <TextField
            type="number"
            label="Distance"
            id="distance-input"
            value={value}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            onChange={onChange}
          />
    </FormControl>
  )
}

export default DistanceInput