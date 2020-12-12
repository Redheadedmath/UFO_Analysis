# UFO_Analysis
## Analysis Overview #
This project refines a javascript data set of UFO observations and creates a dynamic table in HTML that allows the curious observer to search for other similar UFO occurrences. The data set of this project covers a scope of 2 weeks in January of 2010, as is clarified in the filter on the page. The table can filter UFO observations by the following criteria. 

### Filter Criteria ###
<ul>
    <li>The <b>date</b> of occurrence</li>
    <li>The nearest <b>city</b></li>
    <li>The <b>state</b> in which it took place</li>
    <li>The <b>country</b></il>
    <li>The <b>shape</b> of the supposed UFO</li>
</ul>

## Results ##
Using the above filter criteria, the curious user can filter through the collected data by any combination or individual criteria. The javascript “listens” for updates to the filters using the <b>d3</b> package. <br /> <br />
The clean table head and filter look like this. 
<table><tr>
<td> <img src="results/emptyFilter.png" alt="Drawing" style="width: 100px;"/> </td>
</tr></table>

The user can filter by a single criteria, such as date, like this search below. <br />
<table><tr>
<td> <img src="results/dateFilter.png" alt="Drawing" style="width: 100px;"/> </td>
</tr></table>

The user can also filter by multiple or all criteria. Here are two examples where a search was done by Date and Shape, and another by Date and State. <br />
<table><tr>
<td> <img src="results/dateAndShape.png" alt="Drawing" style="width: 100px;"/> </td>
</tr>
<tr> <td> <img src="results/dateAndState.png" alt="Drawing" style="width: 100px;"/> </td> </tr>
</table>

## Project Summary ##
Two key drawbacks of this table come to mind immediately. 
<ol>
    <li><b>Limited data.</b> <br /> While this project serves as an excellent start to an exploration, the data herein is very limited and is not linked to other resources or visualizations. </li>
    <li><b>Inelegant filter.</b> <br /> The filter options allow this table to be dynamic and interesting. However, the results of the filters are very specific and perhaps not obvious to the user who is not already familiar with the data. </li>
</ol>

### Next Steps ###
Building from these drawbacks, I would recommend for future development the following ideas. 
<ol>
    <li> <b> Build uppon the data set. </b> <br /> Dana will not be the only person out there interested in these data. Perhaps build a database to compile and expound upon various recorded UFO sightings. This could be done through a variety of methods whether hosting such a database locally or via cloud and could involve scraping new sightings from various sources. </li>
    <li> <b> Visualize the data.</b> <br /> I recommend showing the breakdown of UFO sightings by shape, date, etc. through bar graphs or pie charts. I would also recommend rendering a map of the USA, and later world as the database is expanded, with markers over the cities where the sightings occurred. </li>
    <li> <b> Retool the filter. </b> <br /> I would recommend implementing a drop down list on the filters with options for <b>shape</b> or <b>country</b>, where there are few (or 1) options for either that may not be obvious to guess. Additionally, I would implement a filter to search for a string within the comments of each observation. </li>
</ol>
 