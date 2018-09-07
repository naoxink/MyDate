var MyDate = function(date){

  var _this = this

  _this.toStr = function(x){ return Object.prototype.toString.call(x) }

  _this.isStr = function(x){ return _this.toStr(x) === '[object String]' }

  _this.isDate = function(x){ return _this.toStr(x) === '[object Date]' }

  _this.isNumber = function(x){ return _this.toStr(x) === '[object Number]' }

  _this.msFromDate = function(date){ return date.getTime() }

  _this.parseDate = function(date){
    if(_this.isDate(date)) return date
    else if(_this.isStr(date) || _this.isNumber(date)) return new Date(date)
    else throw new Error('Invalid date type: ' + _this.toStr(date))
  }

  _this.msSplit = function(ms){
    var milliseconds = Math.floor((ms % 1000) / 100)
    var seconds = Math.floor((ms / 1000) % 60)
    var minutes = Math.floor((ms / (1000 * 60)) % 60)
    var hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    var days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 31)
    var months = Math.floor((ms / (1000 * 60 * 60 * 24 * 31)) % 12)
    var years = Math.floor((ms / (1000 * 60 * 60 * 24 * 31 * 12)))
    return {
      'years': years,
      'months': months,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  _this.daysToMs = function(days){ return _this.hoursToMs(days * 24) }

  _this.hoursToMs = function(hours){ return _this.minutesToMs(hours * 60) }

  _this.minutesToMs = function(minutes){ return _this.secondsToMs(minutes * 60) }

  _this.secondsToMs = function(seconds){ return seconds * 1000 }

  _this.addYears = function(years){
    _this.date = new Date(_this.date.setFullYear(_this.date.getFullYear() + years))
    return _this
  }

  _this.addMonths = function(months){
    _this.date = new Date(_this.date.setMonth(_this.date.getMonth() + months + 1))
    return _this
  }

  _this.addDays = function(days){
    _this.addMilliseconds(_this.daysToMs(days))
    return _this
  }

  _this.addHours = function(hours){
    _this.addMilliseconds(_this.hoursToMs(hours))
    return _this
  }

  _this.addMinutes = function(minutes){
    _this.addMilliseconds(_this.minutesToMs(minutes))
    return _this
  }

  _this.addSeconds = function(seconds){
    _this.addMilliseconds(_this.secondsToMs(seconds))
    return _this
  }

  _this.addMilliseconds = function(milliseconds){
    _this.date = new Date(( _this.date.getTime() + milliseconds ))
    return _this
  }

  _this.substractYears = function(years){
    _this.date = new Date(_this.date.setFullYear(_this.date.getFullYear() - years))
    return _this
  }

  _this.substractMonths = function(months){
    _this.date = new Date(_this.date.setMonth(_this.date.getMonth() - months))
    return _this
  }

  _this.substractDays = function(days){
    _this.substractMilliseconds(_this.daysToMs(days))
    return _this
  }

  _this.substractHours = function(hours){
    _this.substractMilliseconds(_this.hoursToMs(hours))
    return _this
  }

  _this.substractMinutes = function(minutes){
    _this.substractMilliseconds(_this.minutesToMs(minutes))
    return _this
  }

  _this.substractSeconds = function(seconds){
    _this.substractMilliseconds(_this.secondsToMs(seconds))
    return _this
  }

  _this.substractMilliseconds = function(milliseconds){
    _this.date = new Date(( _this.date.getTime() - milliseconds ))
    return _this
  }

  _this.diff = function(date){
    date = _this.parseDate(date)
    var diff = Math.abs(date.getTime() - _this.date.getTime())
    var diffDate = new Date(diff)
    return _this.msSplit(diffDate)
  }

  _this.date = _this.parseDate(date)

  _this.toString = function(){ return _this.date.toLocaleString() }

  _this.getDate = function(){ return _this.date }

  return _this
}
