import { createTheme } from '@mui/material/styles';

export default createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 14,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            },
          },
        },
        MuiFormControlLabel: {
          styleOverrides: {
            root: {
              width: '100%',
              padding: '10px 16px',
              margin: '0',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              marginBottom: '8px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#eaeaea',
              },
            },
            label: {
              fontWeight: 'bold',
              fontSize: '14px',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: '8px',
              padding: '6px 16px',
            },
          },
        },
      },
    });