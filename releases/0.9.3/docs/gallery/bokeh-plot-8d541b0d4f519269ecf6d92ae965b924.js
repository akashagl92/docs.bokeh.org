(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("03bfc36b-af20-472c-a3d4-59911ab4055f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '03bfc36b-af20-472c-a3d4-59911ab4055f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "CategoricalTicker", "attributes": {"doc": null, "num_minor_ticks": 5, "id": "cce51416-ab53-4716-9e5a-45cc5c2bd95a", "tags": []}, "id": "cce51416-ab53-4716-9e5a-45cc5c2bd95a"}, {"type": "CategoricalAxis", "attributes": {"axis_line_color": null, "major_tick_line_color": null, "ticker": {"type": "CategoricalTicker", "id": "655cb10e-47dc-4440-b4cf-e242162f5d72"}, "major_label_standoff": 0, "doc": null, "formatter": {"type": "CategoricalTickFormatter", "id": "854f43e9-5746-4ac0-b927-932ba31a5b00"}, "tags": [], "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "major_label_text_font_size": {"value": "5pt"}, "id": "efcb0ae4-6db0-4647-b6b7-a91c64323894"}, "id": "efcb0ae4-6db0-4647-b6b7-a91c64323894"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "year"}, "height": {"units": "data", "value": 1}, "y": {"field": "month"}, "width": {"units": "data", "value": 1}, "fill_color": {"field": "color"}, "line_alpha": {"value": 1.0}, "line_color": null, "doc": null, "id": "24a17dca-ff31-4086-b71d-9331e4e9dc93"}, "id": "24a17dca-ff31-4086-b71d-9331e4e9dc93"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "id": "38dac16f-dfd8-4f37-889b-52e91a4dcd57", "tags": [], "doc": null}, "id": "38dac16f-dfd8-4f37-889b-52e91a4dcd57"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "639584b6-bc1d-4a88-9504-8e4a1362504e", "tags": [], "geometries": []}, "id": "639584b6-bc1d-4a88-9504-8e4a1362504e"}, {"type": "CategoricalTickFormatter", "attributes": {"doc": null, "id": "9397dd88-4c0d-4fcf-842d-96855b0e4940", "tags": []}, "id": "9397dd88-4c0d-4fcf-842d-96855b0e4940"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "id": "a541594e-ad74-4a9a-b079-262af1489329", "tags": [], "doc": null}, "id": "a541594e-ad74-4a9a-b079-262af1489329"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"year": ["1948", "1948", "1948", "1948", "1948", "1948", "1948", "1948", "1948", "1948", "1948", "1948", "1949", "1949", "1949", "1949", "1949", "1949", "1949", "1949", "1949", "1949", "1949", "1949", "1950", "1950", "1950", "1950", "1950", "1950", "1950", "1950", "1950", "1950", "1950", "1950", "1951", "1951", "1951", "1951", "1951", "1951", "1951", "1951", "1951", "1951", "1951", "1951", "1952", "1952", "1952", "1952", "1952", "1952", "1952", "1952", "1952", "1952", "1952", "1952", "1953", "1953", "1953", "1953", "1953", "1953", "1953", "1953", "1953", "1953", "1953", "1953", "1954", "1954", "1954", "1954", "1954", "1954", "1954", "1954", "1954", "1954", "1954", "1954", "1955", "1955", "1955", "1955", "1955", "1955", "1955", "1955", "1955", "1955", "1955", "1955", "1956", "1956", "1956", "1956", "1956", "1956", "1956", "1956", "1956", "1956", "1956", "1956", "1957", "1957", "1957", "1957", "1957", "1957", "1957", "1957", "1957", "1957", "1957", "1957", "1958", "1958", "1958", "1958", "1958", "1958", "1958", "1958", "1958", "1958", "1958", "1958", "1959", "1959", "1959", "1959", "1959", "1959", "1959", "1959", "1959", "1959", "1959", "1959", "1960", "1960", "1960", "1960", "1960", "1960", "1960", "1960", "1960", "1960", "1960", "1960", "1961", "1961", "1961", "1961", "1961", "1961", "1961", "1961", "1961", "1961", "1961", "1961", "1962", "1962", "1962", "1962", "1962", "1962", "1962", "1962", "1962", "1962", "1962", "1962", "1963", "1963", "1963", "1963", "1963", "1963", "1963", "1963", "1963", "1963", "1963", "1963", "1964", "1964", "1964", "1964", "1964", "1964", "1964", "1964", "1964", "1964", "1964", "1964", "1965", "1965", "1965", "1965", "1965", "1965", "1965", "1965", "1965", "1965", "1965", "1965", "1966", "1966", "1966", "1966", "1966", "1966", "1966", "1966", "1966", "1966", "1966", "1966", "1967", "1967", "1967", "1967", "1967", "1967", "1967", "1967", "1967", "1967", "1967", "1967", "1968", "1968", "1968", "1968", "1968", "1968", "1968", "1968", "1968", "1968", "1968", "1968", "1969", "1969", "1969", "1969", "1969", "1969", "1969", "1969", "1969", "1969", "1969", "1969", "1970", "1970", "1970", "1970", "1970", "1970", "1970", "1970", "1970", "1970", "1970", "1970", "1971", "1971", "1971", "1971", "1971", "1971", "1971", "1971", "1971", "1971", "1971", "1971", "1972", "1972", "1972", "1972", "1972", "1972", "1972", "1972", "1972", "1972", "1972", "1972", "1973", "1973", "1973", "1973", "1973", "1973", "1973", "1973", "1973", "1973", "1973", "1973", "1974", "1974", "1974", "1974", "1974", "1974", "1974", "1974", "1974", "1974", "1974", "1974", "1975", "1975", "1975", "1975", "1975", "1975", "1975", "1975", "1975", "1975", "1975", "1975", "1976", "1976", "1976", "1976", "1976", "1976", "1976", "1976", "1976", "1976", "1976", "1976", "1977", "1977", "1977", "1977", "1977", "1977", "1977", "1977", "1977", "1977", "1977", "1977", "1978", "1978", "1978", "1978", "1978", "1978", "1978", "1978", "1978", "1978", "1978", "1978", "1979", "1979", "1979", "1979", "1979", "1979", "1979", "1979", "1979", "1979", "1979", "1979", "1980", "1980", "1980", "1980", "1980", "1980", "1980", "1980", "1980", "1980", "1980", "1980", "1981", "1981", "1981", "1981", "1981", "1981", "1981", "1981", "1981", "1981", "1981", "1981", "1982", "1982", "1982", "1982", "1982", "1982", "1982", "1982", "1982", "1982", "1982", "1982", "1983", "1983", "1983", "1983", "1983", "1983", "1983", "1983", "1983", "1983", "1983", "1983", "1984", "1984", "1984", "1984", "1984", "1984", "1984", "1984", "1984", "1984", "1984", "1984", "1985", "1985", "1985", "1985", "1985", "1985", "1985", "1985", "1985", "1985", "1985", "1985", "1986", "1986", "1986", "1986", "1986", "1986", "1986", "1986", "1986", "1986", "1986", "1986", "1987", "1987", "1987", "1987", "1987", "1987", "1987", "1987", "1987", "1987", "1987", "1987", "1988", "1988", "1988", "1988", "1988", "1988", "1988", "1988", "1988", "1988", "1988", "1988", "1989", "1989", "1989", "1989", "1989", "1989", "1989", "1989", "1989", "1989", "1989", "1989", "1990", "1990", "1990", "1990", "1990", "1990", "1990", "1990", "1990", "1990", "1990", "1990", "1991", "1991", "1991", "1991", "1991", "1991", "1991", "1991", "1991", "1991", "1991", "1991", "1992", "1992", "1992", "1992", "1992", "1992", "1992", "1992", "1992", "1992", "1992", "1992", "1993", "1993", "1993", "1993", "1993", "1993", "1993", "1993", "1993", "1993", "1993", "1993", "1994", "1994", "1994", "1994", "1994", "1994", "1994", "1994", "1994", "1994", "1994", "1994", "1995", "1995", "1995", "1995", "1995", "1995", "1995", "1995", "1995", "1995", "1995", "1995", "1996", "1996", "1996", "1996", "1996", "1996", "1996", "1996", "1996", "1996", "1996", "1996", "1997", "1997", "1997", "1997", "1997", "1997", "1997", "1997", "1997", "1997", "1997", "1997", "1998", "1998", "1998", "1998", "1998", "1998", "1998", "1998", "1998", "1998", "1998", "1998", "1999", "1999", "1999", "1999", "1999", "1999", "1999", "1999", "1999", "1999", "1999", "1999", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2001", "2001", "2001", "2001", "2001", "2001", "2001", "2001", "2001", "2001", "2001", "2001", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2003", "2003", "2003", "2003", "2003", "2003", "2003", "2003", "2003", "2003", "2003", "2003", "2004", "2004", "2004", "2004", "2004", "2004", "2004", "2004", "2004", "2004", "2004", "2004", "2005", "2005", "2005", "2005", "2005", "2005", "2005", "2005", "2005", "2005", "2005", "2005", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2007", "2007", "2007", "2007", "2007", "2007", "2007", "2007", "2007", "2007", "2007", "2007", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2009", "2009", "2009", "2009", "2009", "2009", "2009", "2009", "2009", "2009", "2009", "2009", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2011", "2011", "2011", "2011", "2011", "2011", "2011", "2011", "2011", "2011", "2011", "2011", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2013", "2013", "2013", "2013", "2013", "2013", "2013", "2013", "2013", "2013", "2013", "2013"], "month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "rate": [4.0, 4.7, 4.5, 4.0, 3.4, 3.9, 3.9, 3.6, 3.4, 2.9, 3.3, 3.6, 5.0, 5.8, 5.6, 5.4, 5.7, 6.4, 7.0, 6.3, 5.9, 6.1, 5.7, 6.0, 7.6, 7.9, 7.1, 6.0, 5.3, 5.6, 5.3, 4.1, 4.0, 3.3, 3.8, 3.9, 4.4, 4.2, 3.8, 3.2, 2.9, 3.4, 3.3, 2.9, 3.0, 2.8, 3.2, 2.9, 3.7, 3.8, 3.3, 3.0, 2.9, 3.2, 3.3, 3.1, 2.7, 2.4, 2.5, 2.5, 3.4, 3.2, 2.9, 2.8, 2.5, 2.7, 2.7, 2.4, 2.6, 2.5, 3.2, 4.2, 5.7, 6.3, 6.4, 6.1, 5.7, 5.7, 5.7, 5.4, 5.3, 4.6, 4.9, 4.8, 5.8, 5.7, 5.2, 4.9, 4.2, 4.4, 4.0, 3.8, 3.5, 3.4, 3.8, 3.9, 4.7, 4.8, 4.7, 4.1, 4.2, 4.7, 4.4, 3.7, 3.4, 3.1, 3.9, 4.0, 4.9, 4.7, 4.3, 4.0, 3.9, 4.6, 4.1, 3.7, 3.7, 3.6, 4.6, 5.0, 6.8, 7.7, 7.7, 7.5, 7.1, 7.6, 7.4, 6.7, 6.0, 5.5, 5.6, 6.0, 7.0, 7.0, 6.4, 5.2, 4.9, 5.4, 5.2, 4.8, 4.7, 4.7, 5.3, 5.1, 6.1, 5.7, 6.1, 5.2, 4.8, 5.8, 5.5, 5.2, 4.7, 5.0, 5.6, 6.4, 7.7, 8.1, 7.7, 7.0, 6.6, 7.3, 6.9, 6.2, 5.8, 5.5, 5.6, 5.8, 6.7, 6.5, 6.2, 5.5, 5.1, 5.9, 5.3, 5.3, 4.9, 4.5, 5.3, 5.3, 6.6, 6.9, 6.3, 5.6, 5.5, 6.2, 5.6, 5.2, 4.8, 4.7, 5.3, 5.3, 6.4, 6.2, 5.9, 5.3, 4.8, 5.9, 4.9, 4.8, 4.5, 4.4, 4.5, 4.7, 5.5, 5.7, 5.1, 4.7, 4.3, 5.3, 4.5, 4.2, 3.8, 3.6, 3.9, 3.7, 4.4, 4.2, 4.0, 3.6, 3.7, 4.6, 3.9, 3.6, 3.3, 3.2, 3.4, 3.5, 4.2, 4.2, 3.9, 3.5, 3.2, 4.6, 4.1, 3.7, 3.7, 3.8, 3.7, 3.5, 4.0, 4.2, 3.8, 3.2, 2.9, 4.5, 4.0, 3.5, 3.3, 3.2, 3.3, 3.1, 3.7, 3.7, 3.5, 3.2, 2.9, 4.1, 3.8, 3.5, 3.7, 3.5, 3.3, 3.2, 4.2, 4.7, 4.6, 4.3, 4.1, 5.6, 5.3, 5.0, 5.2, 5.1, 5.5, 5.6, 6.6, 6.6, 6.3, 5.7, 5.3, 6.5, 6.2, 5.9, 5.8, 5.4, 5.7, 5.5, 6.5, 6.4, 6.1, 5.5, 5.1, 6.2, 5.9, 5.5, 5.4, 5.1, 4.9, 4.8, 5.5, 5.6, 5.2, 4.8, 4.4, 5.4, 5.0, 4.7, 4.7, 4.2, 4.6, 4.6, 5.7, 5.8, 5.3, 4.8, 4.6, 5.8, 5.7, 5.3, 5.7, 5.5, 6.2, 6.7, 9.0, 9.1, 9.1, 8.6, 8.3, 9.1, 8.7, 8.2, 8.1, 7.8, 7.8, 7.8, 8.8, 8.7, 8.1, 7.4, 6.8, 8.0, 7.8, 7.6, 7.4, 7.2, 7.4, 7.4, 8.3, 8.5, 7.9, 6.9, 6.4, 7.5, 7.0, 6.8, 6.6, 6.4, 6.5, 6.0, 7.1, 6.9, 6.6, 5.8, 5.5, 6.2, 6.3, 5.9, 5.8, 5.4, 5.6, 5.7, 6.4, 6.4, 6.1, 5.5, 5.2, 6.0, 5.9, 5.9, 5.7, 5.6, 5.6, 5.7, 6.9, 6.8, 6.6, 6.7, 7.1, 7.8, 7.9, 7.6, 7.2, 7.1, 7.1, 6.9, 8.2, 8.0, 7.7, 7.0, 7.1, 7.7, 7.3, 7.2, 7.3, 7.5, 7.9, 8.3, 9.4, 9.6, 9.5, 9.2, 9.1, 9.8, 9.8, 9.6, 9.7, 9.9, 10.4, 10.5, 11.4, 11.3, 10.8, 10.0, 9.8, 10.2, 9.4, 9.2, 8.8, 8.4, 8.1, 8.0, 8.8, 8.4, 8.1, 7.6, 7.2, 7.4, 7.5, 7.3, 7.1, 7.0, 6.9, 7.0, 8.0, 7.8, 7.5, 7.1, 7.0, 7.5, 7.4, 6.9, 6.9, 6.8, 6.7, 6.7, 7.3, 7.8, 7.5, 7.0, 7.0, 7.3, 7.0, 6.7, 6.8, 6.6, 6.6, 6.3, 7.3, 7.2, 6.9, 6.2, 6.1, 6.3, 6.1, 5.8, 5.7, 5.7, 5.6, 5.4, 6.3, 6.2, 5.9, 5.3, 5.4, 5.5, 5.5, 5.4, 5.2, 5.0, 5.2, 5.0, 6.0, 5.6, 5.2, 5.1, 5.0, 5.5, 5.3, 5.1, 5.1, 5.0, 5.2, 5.1, 6.0, 5.9, 5.5, 5.3, 5.2, 5.4, 5.6, 5.5, 5.6, 5.5, 5.9, 6.0, 7.1, 7.3, 7.2, 6.5, 6.7, 7.0, 6.8, 6.6, 6.5, 6.5, 6.7, 6.9, 8.1, 8.2, 7.8, 7.2, 7.3, 8.0, 7.7, 7.4, 7.3, 6.9, 7.1, 7.1, 8.0, 7.8, 7.4, 6.9, 6.8, 7.2, 7.0, 6.6, 6.4, 6.4, 6.2, 6.1, 7.3, 7.1, 6.8, 6.2, 5.9, 6.2, 6.2, 5.9, 5.6, 5.4, 5.3, 5.1, 6.2, 5.9, 5.7, 5.6, 5.5, 5.8, 5.9, 5.6, 5.4, 5.2, 5.3, 5.2, 6.3, 6.0, 5.8, 5.4, 5.4, 5.5, 5.6, 5.1, 5.0, 4.9, 5.0, 5.0, 5.9, 5.7, 5.5, 4.8, 4.7, 5.2, 5.0, 4.8, 4.7, 4.4, 4.3, 4.4, 5.2, 5.0, 5.0, 4.1, 4.2, 4.7, 4.7, 4.5, 4.4, 4.2, 4.1, 4.0, 4.8, 4.7, 4.4, 4.1, 4.0, 4.5, 4.5, 4.2, 4.1, 3.8, 3.8, 3.7, 4.5, 4.4, 4.3, 3.7, 3.8, 4.1, 4.2, 4.1, 3.8, 3.6, 3.7, 3.7, 4.7, 4.6, 4.5, 4.2, 4.1, 4.7, 4.7, 4.9, 4.7, 5.0, 5.3, 5.4, 6.3, 6.1, 6.1, 5.7, 5.5, 6.0, 5.9, 5.7, 5.4, 5.3, 5.6, 5.7, 6.5, 6.4, 6.2, 5.8, 5.8, 6.5, 6.3, 6.0, 5.8, 5.6, 5.6, 5.4, 6.3, 6.0, 6.0, 5.4, 5.3, 5.8, 5.7, 5.4, 5.1, 5.1, 5.2, 5.1, 5.7, 5.8, 5.4, 4.9, 4.9, 5.2, 5.2, 4.9, 4.8, 4.6, 4.8, 4.6, 5.1, 5.1, 4.8, 4.5, 4.4, 4.8, 5.0, 4.6, 4.4, 4.1, 4.3, 4.3, 5.0, 4.9, 4.5, 4.3, 4.3, 4.7, 4.9, 4.6, 4.5, 4.4, 4.5, 4.8, 5.4, 5.2, 5.2, 4.8, 5.2, 5.7, 6.0, 6.1, 6.0, 6.1, 6.5, 7.1, 8.5, 8.9, 9.0, 8.6, 9.1, 9.7, 9.7, 9.6, 9.5, 9.5, 9.4, 9.7, 10.6, 10.4, 10.2, 9.5, 9.3, 9.6, 9.7, 9.5, 9.2, 9.0, 9.3, 9.1, 9.8, 9.5, 9.2, 8.7, 8.7, 9.3, 9.3, 9.1, 8.8, 8.5, 8.2, 8.3, 8.8, 8.7, 8.4, 7.7, 7.9, 8.4, 8.6, 8.2, 7.6, 7.5, 7.4, 7.6, 8.5, 8.1, 7.6, 7.1, 7.3, 7.8, 7.7, 7.3, 7.0, 7.0, 6.6, 6.5], "color": ["#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#75968f", "#a5bab7", "#a5bab7", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#ddb7b1", "#dfccce", "#e2e2e2", "#dfccce", "#e2e2e2", "#dfccce", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#75968f", "#a5bab7", "#a5bab7", "#75968f", "#a5bab7", "#75968f", "#a5bab7", "#75968f", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#75968f", "#a5bab7", "#a5bab7", "#a5bab7", "#75968f", "#75968f", "#75968f", "#75968f", "#a5bab7", "#a5bab7", "#75968f", "#75968f", "#75968f", "#75968f", "#75968f", "#75968f", "#75968f", "#75968f", "#a5bab7", "#c9d9d3", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#e2e2e2", "#dfccce", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#ddb7b1", "#ddb7b1", "#dfccce", "#e2e2e2", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#dfccce", "#e2e2e2", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#dfccce", "#ddb7b1", "#cc7878", "#ddb7b1", "#ddb7b1", "#dfccce", "#ddb7b1", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#75968f", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#75968f", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#933b41", "#933b41", "#933b41", "#cc7878", "#cc7878", "#933b41", "#cc7878", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#cc7878", "#cc7878", "#cc7878", "#ddb7b1", "#dfccce", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#cc7878", "#cc7878", "#ddb7b1", "#dfccce", "#dfccce", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#ddb7b1", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#cc7878", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#550b1d", "#550b1d", "#550b1d", "#550b1d", "#550b1d", "#550b1d", "#933b41", "#550b1d", "#933b41", "#933b41", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#ddb7b1", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#ddb7b1", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#ddb7b1", "#ddb7b1", "#cc7878", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce", "#e2e2e2", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#a5bab7", "#a5bab7", "#a5bab7", "#a5bab7", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#e2e2e2", "#c9d9d3", "#e2e2e2", "#e2e2e2", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#dfccce", "#ddb7b1", "#cc7878", "#cc7878", "#933b41", "#cc7878", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#550b1d", "#550b1d", "#550b1d", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#933b41", "#cc7878", "#cc7878", "#933b41", "#933b41", "#933b41", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#cc7878", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#cc7878", "#cc7878", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#ddb7b1", "#dfccce", "#dfccce"]}, "doc": null, "id": "dbae366c-1af1-453d-b77b-11c0206e2894", "column_names": ["year", "month", "rate", "color"]}, "id": "dbae366c-1af1-453d-b77b-11c0206e2894"}, {"type": "CategoricalAxis", "attributes": {"axis_line_color": null, "major_tick_line_color": null, "ticker": {"type": "CategoricalTicker", "id": "cce51416-ab53-4716-9e5a-45cc5c2bd95a"}, "major_label_standoff": 0, "doc": null, "formatter": {"type": "CategoricalTickFormatter", "id": "9397dd88-4c0d-4fcf-842d-96855b0e4940"}, "major_label_orientation": 1.0471975511965976, "tags": [], "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "major_label_text_font_size": {"value": "5pt"}, "id": "d29bdcf9-0252-4753-840a-58fd1fc84d54"}, "id": "d29bdcf9-0252-4753-840a-58fd1fc84d54"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "FactorRange", "id": "8a6dd6b3-17ad-443b-8af1-4f2d7c3c9785"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "639584b6-bc1d-4a88-9504-8e4a1362504e"}, "right": [], "renderers": [{"type": "CategoricalAxis", "id": "d29bdcf9-0252-4753-840a-58fd1fc84d54"}, {"type": "Grid", "id": "78b76ab0-fa40-46da-9129-49389302432d"}, {"type": "CategoricalAxis", "id": "efcb0ae4-6db0-4647-b6b7-a91c64323894"}, {"type": "Grid", "id": "4aa63b84-474c-4bab-8425-96ea749ead74"}, {"type": "GlyphRenderer", "id": "affa79f3-e874-475e-b380-478353a1bf43"}], "below": [], "left": [{"type": "CategoricalAxis", "id": "efcb0ae4-6db0-4647-b6b7-a91c64323894"}], "above": [{"type": "CategoricalAxis", "id": "d29bdcf9-0252-4753-840a-58fd1fc84d54"}], "tags": [], "plot_width": 900, "extra_y_ranges": {}, "toolbar_location": "left", "title": "US Unemployment (1948 - 2013)", "x_range": {"type": "FactorRange", "id": "0676c864-a2d3-4deb-87bf-eda889469484"}, "tools": [{"type": "ResizeTool", "id": "a541594e-ad74-4a9a-b079-262af1489329"}, {"type": "HoverTool", "id": "eaa0d88c-b9b0-43bc-a20d-bbcd7d574a35"}, {"type": "PreviewSaveTool", "id": "38dac16f-dfd8-4f37-889b-52e91a4dcd57"}, {"type": "PanTool", "id": "56b3861a-5c26-41b3-bf47-ac2db982cef2"}, {"type": "BoxZoomTool", "id": "fe71d022-d24b-492c-b7f1-62f4e1949d84"}, {"type": "WheelZoomTool", "id": "3def1807-1b50-4088-bf36-66b091a03991"}], "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7"}, "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "id": "56b3861a-5c26-41b3-bf47-ac2db982cef2"}, "id": "56b3861a-5c26-41b3-bf47-ac2db982cef2"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "id": "3def1807-1b50-4088-bf36-66b091a03991"}, "id": "3def1807-1b50-4088-bf36-66b091a03991"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "dbae366c-1af1-453d-b77b-11c0206e2894"}, "tags": [], "glyph": {"type": "Rect", "id": "24a17dca-ff31-4086-b71d-9331e4e9dc93"}, "doc": null, "nonselection_glyph": {"type": "Rect", "id": "1e134452-2da8-4e70-8503-2d0a6a960be5"}, "selection_glyph": null, "id": "affa79f3-e874-475e-b380-478353a1bf43"}, "id": "affa79f3-e874-475e-b380-478353a1bf43"}, {"type": "CategoricalTickFormatter", "attributes": {"doc": null, "id": "854f43e9-5746-4ac0-b927-932ba31a5b00", "tags": []}, "id": "854f43e9-5746-4ac0-b927-932ba31a5b00"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "id": "fe71d022-d24b-492c-b7f1-62f4e1949d84"}, "id": "fe71d022-d24b-492c-b7f1-62f4e1949d84"}, {"type": "HoverTool", "attributes": {"doc": null, "tooltips": [["date", "@month @year"], ["rate", "@rate"]], "id": "eaa0d88c-b9b0-43bc-a20d-bbcd7d574a35", "tags": [], "callback": null, "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "renderers": [], "always_active": true, "names": []}, "id": "eaa0d88c-b9b0-43bc-a20d-bbcd7d574a35"}, {"type": "Grid", "attributes": {"grid_line_color": null, "ticker": {"type": "CategoricalTicker", "id": "655cb10e-47dc-4440-b4cf-e242162f5d72"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "dimension": 1, "id": "4aa63b84-474c-4bab-8425-96ea749ead74"}, "id": "4aa63b84-474c-4bab-8425-96ea749ead74"}, {"type": "FactorRange", "attributes": {"callback": null, "tags": [], "doc": null, "factors": ["Dec", "Nov", "Oct", "Sep", "Aug", "Jul", "Jun", "May", "Apr", "Mar", "Feb", "Jan"], "id": "8a6dd6b3-17ad-443b-8af1-4f2d7c3c9785"}, "id": "8a6dd6b3-17ad-443b-8af1-4f2d7c3c9785"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "year"}, "height": {"units": "data", "value": 1}, "y": {"field": "month"}, "width": {"units": "data", "value": 1}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "1e134452-2da8-4e70-8503-2d0a6a960be5"}, "id": "1e134452-2da8-4e70-8503-2d0a6a960be5"}, {"type": "Grid", "attributes": {"grid_line_color": null, "ticker": {"type": "CategoricalTicker", "id": "cce51416-ab53-4716-9e5a-45cc5c2bd95a"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8a16b9c7-81a6-4c6e-a055-0fce9a65c3d7", "subtype": "Figure"}, "dimension": 0, "id": "78b76ab0-fa40-46da-9129-49389302432d"}, "id": "78b76ab0-fa40-46da-9129-49389302432d"}, {"type": "FactorRange", "attributes": {"callback": null, "tags": [], "doc": null, "factors": ["1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"], "id": "0676c864-a2d3-4deb-87bf-eda889469484"}, "id": "0676c864-a2d3-4deb-87bf-eda889469484"}, {"type": "CategoricalTicker", "attributes": {"doc": null, "num_minor_ticks": 5, "id": "655cb10e-47dc-4440-b4cf-e242162f5d72", "tags": []}, "id": "655cb10e-47dc-4440-b4cf-e242162f5d72"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("03bfc36b-af20-472c-a3d4-59911ab4055f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("03bfc36b-af20-472c-a3d4-59911ab4055f", all_models);
    });
  }

}(this));