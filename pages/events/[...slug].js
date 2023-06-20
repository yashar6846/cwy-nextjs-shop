import { useRouter } from 'next/router';
import Button from '../../components/ui/button';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

function FilteredEventsPage() {

    const router = useRouter();
    const filterData = router.query.slug;
    
    if(!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1
    ) {
        return (
            <>
                <p>Invalid filter, Please adjust your values!</p>
                <div className='center'>
                    <Button link='/events'>Show All evenets</Button>
                </div>
            </>
        )
    }

    const filteredEevents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if(!filteredEevents || filteredEevents.length === 0){
        return (
            <>
                <p>No events found for the chosen filter!</p>
                <div className='center'>
                    <Button link='/events'>Show All evenets</Button>
                </div>
            </>
        )
    }


    return (
        <div>
            <EventList items={filteredEevents} />
        </div>
    );
}

export default FilteredEventsPage;