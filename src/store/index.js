import {  makeAutoObservable, onBecomeObserved } from "mobx";
import {getEvents, addEvent, editEvent, deleteEvent, deleteArchive, getEvent} from "../api"
import moment from "moment";

class EventsStore {
    data = [];
    filteredData = []
    oneEvent ={}
    constructor(){
        makeAutoObservable(this, {},{
            autoBind: true,

        })
        onBecomeObserved(this, 'data', this.fetch)
    }
    get archiveData() {
        return this.data.filter(event=>event.archive)
      }
    
    get notArchiveData() {
        return this.data.filter(event=>!event.archive)
      }
    get beforeDate(){
        return this.data
        .filter(event=> moment(event.date).isBefore(moment(), 'day') && !event.archive);
    }
    get todayDate(){
        return this.data
        .filter(event=> moment(event.date).isSame(moment(), "day") && !event.archive)
    }
    get afterDate(){
        return this.data.filter(event=> moment(event.date).isAfter(moment(), "day") && !event.archive)
    }
    get favoriteData(){
        return this.data.filter(event=> event.favorite && !event.archive)
    }

    *fetch() {
        const response = yield getEvents();
        this.data = response;
        this.filteredData = response.filter(event=>!event.archive);
      }
    *addEvent(data) {
        yield addEvent(data)
        yield this.fetch();
      }
    
    *editEvent(data) {
        yield editEvent(data);
        yield this.fetch();
      }
    
    *deleteEvent(id) {
        yield deleteEvent(id)
        yield this.fetch();
      }
    *deleteArchive(){
        yield deleteArchive()
        yield this.fetch()
    }
    *getEvent(id){
        const response = yield getEvent(id)
        this.oneEvent = response;
    }
}

export const events = new EventsStore()