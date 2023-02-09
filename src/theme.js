import Theme from 'theme-ui'
import { funk } from '@theme-ui/presets'
export const theme: Theme = {
    ...funk,
    containers:{
      page:{
          height:'100vh',
          width:'100vw',
          overflow:'none',
          // background:'#0F0E0E'
      },
      floating:{
          position:'absolute',
          height:'80vh',
          width:'80vw',
          top:'50%',
          left:'50%',
          padding:'10px',
          transform:'translate(-50%, -50%)',
          bg: 'rgba(15, 14, 14, 0.1)',
          borderRadius: '16px',
          boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4px)',
          border:' 1px solid rgba(209, 205, 205,0.05)',
      },
      margin:{
          height:'20px',
          width:'100%',
          background:'transparent',
      }
    },
}