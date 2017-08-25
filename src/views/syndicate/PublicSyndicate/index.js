import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import titleize from 'titleize'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

import SyndicateHero from 'components/syndicate/SyndicateHero'
import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'
import SyndicateAbout from 'components/syndicate/SyndicateAbout'
import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'
import SyndicateCtaCard from 'components/syndicate/SyndicateCtaCard'
import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'
import SyndicateIntroSection from 'components/syndicate/SyndicateIntroSection'
import SyndicateHorseCarousel from 'components/syndicate/SyndicateHorseCarousel'
import SyndicateHeritageSection from 'components/syndicate/SyndicateHeritageSection'
import SyndicateFaqs from 'components/syndicate/SyndicateFaqs'

import HorseMemberCarousel from 'components/horse/HorseMemberCarousel'
import HorseHero from 'components/horse/HorseHero'

import ContactForm from 'components/forms/Contact'

import FullWidthSplitSection from 'components/common/FullWidthSplitSection'

import TextButton from 'components/buttons/TextButton'

import {
  description as syndicateDesc,
  benefits as syndicateBenefits,
  benefitsDescription as syndicateBenefitsDescription,
  syndicateUpperHero,
  syndicateLowerHero,
  faqs
} from 'data/syndicate'

import {
  syndicateMembers,
  trainerMembers,
  fakeHorses
} from 'data/horse'

export class PublicSyndicate extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getSyndicateInfo()
  }

  componentWillUnmount () {
    this.props.clearSyndicateData()
  }

  render () {
    const {
      data = {}
    } = this.props

    const {
      name = '',
      owner = { name: '-' },
      featuredImage = '',
      logo = '',
      description = syndicateDesc
    } = data

    return (
      <View title={titleize(name || '')} isPrefixed={false}>
        <div className='public-syndicate'>
          <SyndicateHero
            featuredImage={featuredImage}
            owner={owner}
            logo={logo}
            name={name} />
          <div className='public-syndicate__header'>
            <SyndicateSplitSection
              leftComponent={
                <SyndicateAbout description={description} />
              }
              rightComponent={
                <div>
                  <SyndicateInvolvement
                    benefits={syndicateBenefits}
                    description={syndicateBenefitsDescription(name)} />
                  <div className='visible-md-up'>
                    <SyndicateCtaCard />
                  </div>
                </div>
              } />
          </div>
          <div className='container no-padding'>
            <div className='col-md-8 col-sm-12 public-syndicate__team-members'>
              <HorseMemberCarousel
                syndicateMembers={syndicateMembers} />
            </div>
          </div>

          <div className='public-syndicate__section'>
            <div className='container'>
              <div className='col-md-5 col-sm-12'>
                <SyndicateBenefits />
              </div>
            </div>
          </div>

          <div className='public-syndicate__section-top'>
              <HorseHero {...syndicateUpperHero} />
          </div>

          <div className='public-syndicate__overlay-section'>
              <SyndicateIntroSection
                title={`${name} horses`}
                description='We have a fantastic yard of horses, all of which have run competitively and placed with great confidence. Having managed race horses for many years now, we know where quality can be found and how to thoroughly enjoy the iniafull extent of the racing experience.'>
                  <SyndicateHorseCarousel
                    horses={fakeHorses} />
              </SyndicateIntroSection>
          </div>

          <div className='public-syndicate__section'>
            <div className='container'>
              <div className='col-md-5 col-sm-12'>
                <SyndicateHeritageSection />
              </div>
            </div>
          </div>

          <div className='public-syndicate__section-top'>
              <HorseHero {...syndicateLowerHero} />
          </div>

          <div className='public-syndicate__overlay-section'>
            <SyndicateIntroSection
              title='our trainers'
              description='HTR employs a selection of top racehorse trainers in each syndicate based in different areas of the country. This reduces the risk of an equine virus being a threat to any one syndicate and gives owners the chance of being involved with different leading stables.'>
                <HorseMemberCarousel
                  syndicateMembers={trainerMembers}
                  type='trainer'/>
            </SyndicateIntroSection>
          </div>

          <div className='public-syndicate__section'>
            <FullWidthSplitSection
              modifier='white'
              leftComponent={(
                <div className='col-xs-12 col-md-8 public-syndicate__faqs'>
                  <SyndicateFaqs faqs={faqs} />

                  <div className='col-md-8 col-xs-12 public-syndicate__section-top'>
                    <TextButton
                      modifier='fluid'
                      text='request to join a horse' />
                  </div>
                </div>
              )}
              rightComponent={(
                <div className='public-syndicate__contact-form'>
                  {/* Add in the contact form container */}
                  <ContactForm
                    values={{}}
                    errors={{}}
                    validators={() => {}}
                    update={() => {}}
                    updateErrors={() => {}}
                    submitForm={() => {}}
                    description='Any queries? Leave your message and somebody from the syndicate will get back to you as soon as possible.' />
                </div>
              )}/>
          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ syndicate }, ownProps) => ({
  ...syndicate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSyndicateInfo: () => {
    const name = ownProps.match.params.name
    dispatch(fetchSyndicateInfo({ name }))
  },
  clearSyndicateData: () => {
    return dispatch(clearSyndicateData())
  }
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicSyndicate))
