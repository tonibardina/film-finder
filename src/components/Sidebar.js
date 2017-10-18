// import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'
import Genres from './Genres'
import People from './People'
import { Sliderbar } from './Sliderbar'
import Age from './Age'
import { ResetButton } from './ResetButton'
import photoUrl from './Logo.svg'

export const Sidebar = (props) => {
  return (
    <div>
      <div className='logo-container'>
        <img id='logo' src={photoUrl} alt='Logo' />
      </div>
      <Genres
        genreAdd={props.genreAdd}
        genreDelete={props.genreDelete}
        genreValue={props.genreValue}
      />
      <Age
        age={props.age}
        onAgeClick={props.onAgeClick}
      />
      <People
        onSubmit={props.onSubmit}
        people={props.people}
        onDelete={props.onDelete}
      />
      <Sliderbar
        data={props.data}
        currentValue={props.currentValue}
        defaultValue={props.defaultValue}
      />
      <ResetButton
        resetData={props.resetData}
      />
    </div>)
}
