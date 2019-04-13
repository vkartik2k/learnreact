const head = (props) => {
    return (
        <div>
            Hello we have received an object as props.
            We will use it to display properties.

            <p>{props.news}</p>
        </div>
    )
}

class root extends React.Component {
    render() {
        <div>
            <head news = "news1"/>
            <head news = "news2"/>
            <head news = "blablanews"/>

        </div>
    }
}

