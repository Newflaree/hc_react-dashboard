// Material UI
import {
  Grid,
} from '@mui/material';
// Components
import {
  DashboardPaper,
  NarratorButtonBox,
  NarratorHeader,
  NarratorInfo,
  NarratorNextBooking,
  NarratorPendingPay
} from '../components';
// Layouts
import { DashboardLayout } from '../layouts';


export const NarratorView = ({ user }) => {
  return (
    <DashboardLayout
      pageTitle='Hola'
    >
      <DashboardPaper pageTitle='Detalle del Locutor'>
        {
          user 
            ? (
              <Grid
                container
                sx={{
                  px: {
                    xs: 4,
                    md: 10
                  }
                }}
              >
                <Grid
                  item
                  xs={ 12 }
                  mb={ 4 }
                >
                  <NarratorHeader user={ user } />
                </Grid>

                <Grid
                  item
                  xs={ 12 }
                  mb={ 4 }
                >
                  <NarratorInfo user={ user } />
                </Grid>

                <Grid
                  item
                  xs={ 12 }
                  mb={ 4 }
                >
                  <NarratorNextBooking user={ user }/>
                </Grid>

                <Grid
                  item
                  xs={ 12 }
                  mb={ 8 }
                >
                  <NarratorPendingPay user={ user } />
                </Grid>

                <Grid
                  item
                  xs={ 12 }
                  mb={ 4 }
                >
                  <NarratorButtonBox />
                </Grid>
              </Grid>
            )
            : <></>
        }
      </DashboardPaper>
    </DashboardLayout>
  );
}
