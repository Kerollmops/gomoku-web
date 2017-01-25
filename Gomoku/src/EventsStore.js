class Event {
  constructor() {
    id: 0
  }
}

class EventsStore {
  constructor() {
    this.state = {
        events: []
    }
  }

  push_event() {
    this.state.events.unshift({ id: this.state.events.length })
  }
}

var events_store = new EventsStore()
