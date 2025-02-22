import * as React from 'react';
import { UserPlan } from '../../Component/Services/UserPlan';
import { useQuery } from '@tanstack/react-query';


  export default function PlanReport() {

    const { data: User, refetch, isLoading, isError, error } = useQuery({
        queryKey: ["Report"],
        queryFn: UserPlan,
      });
    
      console.log(User, "PlanReport...")

    return (
        <div>
        {User?.data? (

        <>
        <div className='text-black text-5xl font-semibold underline'>User's Plan Report</div>
          <div className='mt-5 space-y-4 text-2xl'>
            <div>
              <strong className='text-white'>Total Active Plans: </strong> {User?.data.total_active_plans}
            </div>
            <div>
              <strong className='text-white'>Total Nonactive Plans: </strong> {User?.data.total_nonactive_plans}
            </div>
          </div>
        </>
      ) : (
        <div className=''>
          No data available
        </div>
      )}
        </div>
    );
  }
