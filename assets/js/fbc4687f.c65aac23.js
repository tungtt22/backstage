/*! For license information please see fbc4687f.c65aac23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[810337],{723926:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var t=n(824246),s=n(511151);const c={id:"plugin-search-react",title:"@backstage/plugin-search-react",description:"API Reference for @backstage/plugin-search-react"},a=void 0,i={id:"reference/plugin-search-react",title:"@backstage/plugin-search-react",description:"API Reference for @backstage/plugin-search-react",source:"@site/../docs/reference/plugin-search-react.md",sourceDirName:"reference",slug:"/reference/plugin-search-react",permalink:"/docs/reference/plugin-search-react",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-react.md",tags:[],version:"current",frontMatter:{id:"plugin-search-react",title:"@backstage/plugin-search-react",description:"API Reference for @backstage/plugin-search-react"}},l={},h=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",inputbase:"inputbase",p:"p",searchbarbase:"searchbarbase",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-react"})})]}),"\n",(0,t.jsx)(r.p,{children:"Search Plugin frontend library"}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.mocksearchapi",children:"MockSearchApi"})}),(0,t.jsx)(r.td,{children:"Search Api Mock that can be used in tests and storybooks"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultapi",children:"SearchResultApi(props)"})}),(0,t.jsx)(r.td,{children:"Request results through the search api and provide them to a child function."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultcontext",children:"SearchResultContext(props)"})}),(0,t.jsx)(r.td,{children:"Provides context-based results to a child function."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroup",children:"SearchResultGroup(props)"})}),(0,t.jsx)(r.td,{children:"Given a query, search for results and render them as a group."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouplayout",children:"SearchResultGroupLayout(props)"})}),(0,t.jsx)(r.td,{children:"Default layout for rendering search results in a group."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Interface"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchapi",children:"SearchApi"})}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.autocompletefilter",children:"AutocompleteFilter"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.checkboxfilter",children:"CheckboxFilter"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.createsearchresultlistitemextension",children:"createSearchResultListItemExtension"})}),(0,t.jsx)(r.td,{children:"Creates a search result item extension."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.defaultresultlistitem",children:"DefaultResultListItem"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.highlightedsearchresulttext",children:"HighlightedSearchResultText"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchapiref",children:"searchApiRef"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocomplete",children:"SearchAutocomplete"})}),(0,t.jsx)(r.td,{children:"Recommended search autocomplete when you use the Search Provider or Search Context."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocompletedefaultoption",children:"SearchAutocompleteDefaultOption"})}),(0,t.jsx)(r.td,{children:"A default search autocomplete option component."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbar",children:"SearchBar"})}),(0,t.jsx)(r.td,{children:"Recommended search bar when you use the Search Provider or Search Context."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbarbase",children:"SearchBarBase"})}),(0,t.jsxs)(r.td,{children:["All search boxes exported by the search plugin are based on the ",(0,t.jsxs)(r.searchbarbase,{children:[", and this one is based on the ",(0,t.jsx)(r.inputbase,{children:" component from Material UI. Recommended if you don't use Search Provider or Search Context."})]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchcontextprovider",children:"SearchContextProvider"})}),(0,t.jsx)(r.td,{children:"Search context provider which gives you access to shared state between search components"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchfilter",children:"SearchFilter"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpagination",children:"SearchPagination"})}),(0,t.jsx)(r.td,{children:"A component for setting the search context page limit and cursor."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpaginationbase",children:"SearchPaginationBase"})}),(0,t.jsx)(r.td,{children:"A component with controls for search results pagination."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresult",children:"SearchResult"})}),(0,t.jsx)(r.td,{children:"A component returning the search result from a parent search context or api."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultcomponent",children:"SearchResultComponent"})}),(0,t.jsx)(r.td,{children:"Renders results from a parent search context or api."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupfilterfieldlayout",children:"SearchResultGroupFilterFieldLayout"})}),(0,t.jsx)(r.td,{children:"Default layout for a search group filter field."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupselectfilterfield",children:"SearchResultGroupSelectFilterField"})}),(0,t.jsx)(r.td,{children:"A select field that can be used as filter on search result groups."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouptextfilterfield",children:"SearchResultGroupTextFilterField"})}),(0,t.jsx)(r.td,{children:"A text field that can be used as filter on search result groups."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlist",children:"SearchResultList"})}),(0,t.jsx)(r.td,{children:"Given a query, search for results and render them as a list."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistitemextensions",children:"SearchResultListItemExtensions"})}),(0,t.jsx)(r.td,{children:"Render results using search extensions."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistlayout",children:"SearchResultListLayout"})}),(0,t.jsx)(r.td,{children:"Default layout for rendering search results in a list."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultpager",children:"SearchResultPager"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultstate",children:"SearchResultState"})}),(0,t.jsx)(r.td,{children:"Call a child render function passing a search state as an argument."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.selectfilter",children:"SelectFilter"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.usesearch",children:"useSearch"})}),(0,t.jsx)(r.td,{children:"React hook which provides the search context"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.usesearchcontextcheck",children:"useSearchContextCheck"})}),(0,t.jsx)(r.td,{children:"React hook which checks for an existing search context"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.usesearchresultlistitemextensions",children:"useSearchResultListItemExtensions"})}),(0,t.jsx)(r.td,{children:"Returns a function that renders a result using extensions."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.defaultresultlistitemprops",children:"DefaultResultListItemProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.defaultresultlistitem",children:"DefaultResultListItem"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.highlightedsearchresulttextprops",children:"HighlightedSearchResultTextProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.highlightedsearchresulttext",children:"HighlightedSearchResultText"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocompletecomponent",children:"SearchAutocompleteComponent"})}),(0,t.jsxs)(r.td,{children:["Type for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocomplete",children:"SearchAutocomplete"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocompletedefaultoptionprops",children:"SearchAutocompleteDefaultOptionProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocompletedefaultoption",children:"SearchAutocompleteDefaultOption"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocompletefilterprops",children:"SearchAutocompleteFilterProps"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocompleteprops",children:"SearchAutocompleteProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchautocomplete",children:"SearchAutocomplete"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbarbaseprops",children:"SearchBarBaseProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbarbase",children:"SearchBarBase"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbarprops",children:"SearchBarProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchbar",children:"SearchBar"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchcontextproviderprops",children:"SearchContextProviderProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchcontextprovider",children:"SearchContextProvider"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchcontextstate",children:"SearchContextState"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchcontextvalue",children:"SearchContextValue"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchfiltercomponentprops",children:"SearchFilterComponentProps"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchfilterwrapperprops",children:"SearchFilterWrapperProps"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpaginationbaseprops",children:"SearchPaginationBaseProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpaginationbase",children:"SearchPaginationBase"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpaginationlimitoption",children:"SearchPaginationLimitOption"})}),(0,t.jsx)(r.td,{children:"A page limit option, this value must not be greater than 100."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpaginationlimittext",children:"SearchPaginationLimitText"})}),(0,t.jsx)(r.td,{children:'A page limit text, this function is called with a "{ from, to, page, count }" object.'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpaginationprops",children:"SearchPaginationProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchpagination",children:"SearchPagination"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultapiprops",children:"SearchResultApiProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultapi",children:"SearchResultApi()"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultcontextprops",children:"SearchResultContextProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultcontext",children:"SearchResultContext()"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupfilterfieldlayoutprops",children:"SearchResultGroupFilterFieldLayoutProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupfilterfieldlayout",children:"SearchResultGroupFilterFieldLayout"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupfilterfieldpropswith",children:"SearchResultGroupFilterFieldPropsWith"})}),(0,t.jsx)(r.td,{children:"Common props for a result group filter field."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouplayoutprops",children:"SearchResultGroupLayoutProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouplayout",children:"SearchResultGroupLayout()"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupprops",children:"SearchResultGroupProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroup",children:"SearchResultGroup()"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgroupselectfilterfieldprops",children:"SearchResultGroupSelectFilterFieldProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouptextfilterfield",children:"SearchResultGroupTextFilterField"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouptextfilterfieldprops",children:"SearchResultGroupTextFilterFieldProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouptextfilterfield",children:"SearchResultGroupTextFilterField"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistitemextensionoptions",children:"SearchResultListItemExtensionOptions"})}),(0,t.jsxs)(r.td,{children:["Options for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.createsearchresultlistitemextension",children:"createSearchResultListItemExtension"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistitemextensionprops",children:"SearchResultListItemExtensionProps"})}),(0,t.jsx)(r.td,{children:"Extends props for any search result list item extension"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistitemextensionsprops",children:"SearchResultListItemExtensionsProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistitemextensions",children:"SearchResultListItemExtensions"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistlayoutprops",children:"SearchResultListLayoutProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistlayout",children:"SearchResultListLayout"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistprops",children:"SearchResultListProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlist",children:"SearchResultList"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultprops",children:"SearchResultProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresult",children:"SearchResult"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultstateprops",children:"SearchResultStateProps"})}),(0,t.jsxs)(r.td,{children:["Props for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultstate",children:"SearchResultState"})]})]})]})]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},371426:(e,r,n)=>{var t=n(827378),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,n){var t,c={},h=null,o=null;for(t in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,t)&&!l.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:h,ref:o,props:c,_owner:i.current}}r.Fragment=c,r.jsx=h,r.jsxs=h},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),o=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function g(e,r,n){this.props=e,this.context=r,this.refs=j,this.updater=n||p}function m(){}function y(e,r,n){this.props=e,this.context=r,this.refs=j,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var S=y.prototype=new m;S.constructor=y,x(S,g.prototype),S.isPureReactComponent=!0;var b=Array.isArray,R=Object.prototype.hasOwnProperty,P={current:null},v={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,t){var s,c={},a=null,i=null;if(null!=r)for(s in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)R.call(r,s)&&!v.hasOwnProperty(s)&&(c[s]=r[s]);var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){for(var h=Array(l),o=0;o<l;o++)h[o]=arguments[o+2];c.children=h}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===c[s]&&(c[s]=l[s]);return{$$typeof:n,type:e,key:a,ref:i,props:c,_owner:P.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,s,c,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case t:l=!0}}if(l)return a=a(l=e),e=""===c?"."+E(l,0):c,b(a)?(s="",null!=e&&(s=e.replace(C,"$&/")+"/"),w(a,r,s,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),r.push(a)),1;if(l=0,c=""===c?".":c+":",b(e))for(var h=0;h<e.length;h++){var o=c+E(i=e[h],h);l+=w(i,r,s,o,a)}else if(o=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof o)for(e=o.call(e),h=0;!(i=e.next()).done;)l+=w(i=i.value,r,s,o=c+E(i,h++),a);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,r,n){if(null==e)return e;var t=[],s=0;return w(e,t,"","",(function(e){return r.call(n,e,s++)})),t}function F(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},I={transition:null},O={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:I,ReactCurrentOwner:P};r.Children={map:A,forEach:function(e,r,n){A(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return A(e,(function(){r++})),r},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=s,r.Profiler=a,r.PureComponent=y,r.StrictMode=c,r.Suspense=o,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=P.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in r)R.call(r,h)&&!v.hasOwnProperty(h)&&(s[h]=void 0===r[h]&&void 0!==l?l[h]:r[h])}var h=arguments.length-2;if(1===h)s.children=t;else if(1<h){l=Array(h);for(var o=0;o<h;o++)l[o]=arguments[o+2];s.children=l}return{$$typeof:n,type:e.type,key:c,ref:a,props:s,_owner:i}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:h,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:F}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return L.current.useCallback(e,r)},r.useContext=function(e){return L.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return L.current.useDeferredValue(e)},r.useEffect=function(e,r){return L.current.useEffect(e,r)},r.useId=function(){return L.current.useId()},r.useImperativeHandle=function(e,r,n){return L.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return L.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return L.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return L.current.useMemo(e,r)},r.useReducer=function(e,r,n){return L.current.useReducer(e,r,n)},r.useRef=function(e){return L.current.useRef(e)},r.useState=function(e){return L.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return L.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return L.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var t=n(667294);const s={},c=t.createContext(s);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);