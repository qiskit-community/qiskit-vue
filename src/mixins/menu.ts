import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import {
  ORDERED_COMMUNITY_SUB_LINKS,
  HOME_LINK,
  COMMUNITY_LINK,
  TUTORIALS_LINK,
  DOCUMENTATION_LINK,
  LEARN_LINK,
  OVERVIEW_LINK,
  NavLink
} from '@/constants/menuLinks'

@Component
export default class Menu extends Vue {
  homeLink: NavLink = HOME_LINK

  learnMore: Array<NavLink> = [TUTORIALS_LINK, DOCUMENTATION_LINK]

  mainLevelLinks: Array<NavLink> = [
    OVERVIEW_LINK,
    LEARN_LINK,
    { ...COMMUNITY_LINK, sublinks: ORDERED_COMMUNITY_SUB_LINKS },
    DOCUMENTATION_LINK
  ]

  communityLink: NavLink = COMMUNITY_LINK

  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS

  isPathStartingWith(): boolean {
    return false
  }

  isActiveHome(): boolean {
    return false
  }

  isActive(): boolean {
    // TODO: Should remove after the new menu (second menu included) is
    // completely done. #573
    return this.isPathStartingWith()
  }

  isCommunityActive(): boolean {
    return this.communitySubLinks.some(() => this.isActive())
  }

  getSubLinks(item: NavLink): NavLink[] {
    return typeof item.sublinks !== 'undefined' ? item.sublinks : []
  }

  isParent(item: NavLink): boolean {
    return this.getSubLinks(item).length !== 0
  }

  appLinkFromNavLink(item: NavLink): any {
    return {
      url: item.url,
      segment: item.segment
    }
  }
}
