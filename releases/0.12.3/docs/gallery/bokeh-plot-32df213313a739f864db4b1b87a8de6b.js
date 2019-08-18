document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d1d624d2-51ef-4b23-ab86-d0261dd2e7db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1d624d2-51ef-4b23-ab86-d0261dd2e7db' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"c6286ad3-1627-48be-96bd-2e0eae2c3df6":{"roots":{"references":[{"attributes":{},"id":"f6b88a26-1be0-4c51-ac21-6cdee0b2407e","type":"CategoricalTickFormatter"},{"attributes":{},"id":"7051cd56-7342-4885-9ae7-268ecb1cf602","type":"CategoricalTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f6b88a26-1be0-4c51-ac21-6cdee0b2407e","type":"CategoricalTickFormatter"},"major_label_orientation":1.0471975511965976,"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"},"ticker":{"id":"7051cd56-7342-4885-9ae7-268ecb1cf602","type":"CategoricalTicker"}},"id":"24d1bacd-1bdd-4fc5-8197-163a9ac66e44","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["rate","year","month"],"data":{"month":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"rate":[4.0,4.7,4.5,4.0,3.4,3.9,3.9,3.6,3.4,2.9,3.3,3.6,5.0,5.8,5.6,5.4,5.7,6.4,7.0,6.3,5.9,6.1,5.7,6.0,7.6,7.9,7.1,6.0,5.3,5.6,5.3,4.1,4.0,3.3,3.8,3.9,4.4,4.2,3.8,3.2,2.9,3.4,3.3,2.9,3.0,2.8,3.2,2.9,3.7,3.8,3.3,3.0,2.9,3.2,3.3,3.1,2.7,2.4,2.5,2.5,3.4,3.2,2.9,2.8,2.5,2.7,2.7,2.4,2.6,2.5,3.2,4.2,5.7,6.3,6.4,6.1,5.7,5.7,5.7,5.4,5.3,4.6,4.9,4.8,5.8,5.7,5.2,4.9,4.2,4.4,4.0,3.8,3.5,3.4,3.8,3.9,4.7,4.8,4.7,4.1,4.2,4.7,4.4,3.7,3.4,3.1,3.9,4.0,4.9,4.7,4.3,4.0,3.9,4.6,4.1,3.7,3.7,3.6,4.6,5.0,6.8,7.7,7.7,7.5,7.1,7.6,7.4,6.7,6.0,5.5,5.6,6.0,7.0,7.0,6.4,5.2,4.9,5.4,5.2,4.8,4.7,4.7,5.3,5.1,6.1,5.7,6.1,5.2,4.8,5.8,5.5,5.2,4.7,5.0,5.6,6.4,7.7,8.1,7.7,7.0,6.6,7.3,6.9,6.2,5.8,5.5,5.6,5.8,6.7,6.5,6.2,5.5,5.1,5.9,5.3,5.3,4.9,4.5,5.3,5.3,6.6,6.9,6.3,5.6,5.5,6.2,5.6,5.2,4.8,4.7,5.3,5.3,6.4,6.2,5.9,5.3,4.8,5.9,4.9,4.8,4.5,4.4,4.5,4.7,5.5,5.7,5.1,4.7,4.3,5.3,4.5,4.2,3.8,3.6,3.9,3.7,4.4,4.2,4.0,3.6,3.7,4.6,3.9,3.6,3.3,3.2,3.4,3.5,4.2,4.2,3.9,3.5,3.2,4.6,4.1,3.7,3.7,3.8,3.7,3.5,4.0,4.2,3.8,3.2,2.9,4.5,4.0,3.5,3.3,3.2,3.3,3.1,3.7,3.7,3.5,3.2,2.9,4.1,3.8,3.5,3.7,3.5,3.3,3.2,4.2,4.7,4.6,4.3,4.1,5.6,5.3,5.0,5.2,5.1,5.5,5.6,6.6,6.6,6.3,5.7,5.3,6.5,6.2,5.9,5.8,5.4,5.7,5.5,6.5,6.4,6.1,5.5,5.1,6.2,5.9,5.5,5.4,5.1,4.9,4.8,5.5,5.6,5.2,4.8,4.4,5.4,5.0,4.7,4.7,4.2,4.6,4.6,5.7,5.8,5.3,4.8,4.6,5.8,5.7,5.3,5.7,5.5,6.2,6.7,9.0,9.1,9.1,8.6,8.3,9.1,8.7,8.2,8.1,7.8,7.8,7.8,8.8,8.7,8.1,7.4,6.8,8.0,7.8,7.6,7.4,7.2,7.4,7.4,8.3,8.5,7.9,6.9,6.4,7.5,7.0,6.8,6.6,6.4,6.5,6.0,7.1,6.9,6.6,5.8,5.5,6.2,6.3,5.9,5.8,5.4,5.6,5.7,6.4,6.4,6.1,5.5,5.2,6.0,5.9,5.9,5.7,5.6,5.6,5.7,6.9,6.8,6.6,6.7,7.1,7.8,7.9,7.6,7.2,7.1,7.1,6.9,8.2,8.0,7.7,7.0,7.1,7.7,7.3,7.2,7.3,7.5,7.9,8.3,9.4,9.6,9.5,9.2,9.1,9.8,9.8,9.6,9.7,9.9,10.4,10.5,11.4,11.3,10.8,10.0,9.8,10.2,9.4,9.2,8.8,8.4,8.1,8.0,8.8,8.4,8.1,7.6,7.2,7.4,7.5,7.3,7.1,7.0,6.9,7.0,8.0,7.8,7.5,7.1,7.0,7.5,7.4,6.9,6.9,6.8,6.7,6.7,7.3,7.8,7.5,7.0,7.0,7.3,7.0,6.7,6.8,6.6,6.6,6.3,7.3,7.2,6.9,6.2,6.1,6.3,6.1,5.8,5.7,5.7,5.6,5.4,6.3,6.2,5.9,5.3,5.4,5.5,5.5,5.4,5.2,5.0,5.2,5.0,6.0,5.6,5.2,5.1,5.0,5.5,5.3,5.1,5.1,5.0,5.2,5.1,6.0,5.9,5.5,5.3,5.2,5.4,5.6,5.5,5.6,5.5,5.9,6.0,7.1,7.3,7.2,6.5,6.7,7.0,6.8,6.6,6.5,6.5,6.7,6.9,8.1,8.2,7.8,7.2,7.3,8.0,7.7,7.4,7.3,6.9,7.1,7.1,8.0,7.8,7.4,6.9,6.8,7.2,7.0,6.6,6.4,6.4,6.2,6.1,7.3,7.1,6.8,6.2,5.9,6.2,6.2,5.9,5.6,5.4,5.3,5.1,6.2,5.9,5.7,5.6,5.5,5.8,5.9,5.6,5.4,5.2,5.3,5.2,6.3,6.0,5.8,5.4,5.4,5.5,5.6,5.1,5.0,4.9,5.0,5.0,5.9,5.7,5.5,4.8,4.7,5.2,5.0,4.8,4.7,4.4,4.3,4.4,5.2,5.0,5.0,4.1,4.2,4.7,4.7,4.5,4.4,4.2,4.1,4.0,4.8,4.7,4.4,4.1,4.0,4.5,4.5,4.2,4.1,3.8,3.8,3.7,4.5,4.4,4.3,3.7,3.8,4.1,4.2,4.1,3.8,3.6,3.7,3.7,4.7,4.6,4.5,4.2,4.1,4.7,4.7,4.9,4.7,5.0,5.3,5.4,6.3,6.1,6.1,5.7,5.5,6.0,5.9,5.7,5.4,5.3,5.6,5.7,6.5,6.4,6.2,5.8,5.8,6.5,6.3,6.0,5.8,5.6,5.6,5.4,6.3,6.0,6.0,5.4,5.3,5.8,5.7,5.4,5.1,5.1,5.2,5.1,5.7,5.8,5.4,4.9,4.9,5.2,5.2,4.9,4.8,4.6,4.8,4.6,5.1,5.1,4.8,4.5,4.4,4.8,5.0,4.6,4.4,4.1,4.3,4.3,5.0,4.9,4.5,4.3,4.3,4.7,4.9,4.6,4.5,4.4,4.5,4.8,5.4,5.2,5.2,4.8,5.2,5.7,6.0,6.1,6.0,6.1,6.5,7.1,8.5,8.9,9.0,8.6,9.1,9.7,9.7,9.6,9.5,9.5,9.4,9.7,10.6,10.4,10.2,9.5,9.3,9.6,9.7,9.5,9.2,9.0,9.3,9.1,9.8,9.5,9.2,8.7,8.7,9.3,9.3,9.1,8.8,8.5,8.2,8.3,8.8,8.7,8.4,7.7,7.9,8.4,8.6,8.2,7.6,7.5,7.4,7.6,8.5,8.1,7.6,7.1,7.3,7.8,7.7,7.3,7.0,7.0,6.6,6.5],"year":["1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1948","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1949","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1950","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1951","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1952","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1953","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1954","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1955","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1956","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1957","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1958","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1959","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1960","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1961","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1962","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1963","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1964","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1965","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1966","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1967","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1968","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1969","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1970","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1971","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1972","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1973","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1974","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1975","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1976","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1977","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1978","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1979","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1980","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1981","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1982","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1983","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1984","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1985","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1986","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1987","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1988","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1989","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1990","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1991","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1992","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1993","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1994","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1995","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1996","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1997","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1998","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","1999","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2000","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2001","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2002","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2010","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2011","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2012","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013","2013"]}},"id":"e1fb3c38-d92c-4b54-89b9-5850b91d3433","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"}},"id":"af313e49-97cb-482f-b07a-f3ba323ff38f","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"01cbb3f5-94bb-4ccd-abea-b426b8aad4c9","type":"BoxAnnotation"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5b60f0f8-e749-4b1c-87ee-b3773339bae6","type":"CategoricalTickFormatter"},"major_label_standoff":0,"major_label_text_font_size":{"value":"5pt"},"major_tick_line_color":{"value":null},"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"},"ticker":{"id":"04c51c59-0f5b-45f3-8458-d3e52f7befd2","type":"CategoricalTicker"}},"id":"92a5c963-f1e8-46d9-88eb-2bde91e5093c","type":"CategoricalAxis"},{"attributes":{"palette":["#75968f","#a5bab7","#c9d9d3","#e2e2e2","#dfccce","#ddb7b1","#cc7878","#933b41","#550b1d"]},"id":"dbb96b67-00aa-40e9-aabd-ae72aee76a0b","type":"LinearColorMapper"},{"attributes":{"callback":null,"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"},"tooltips":[["date","@month @year"],["rate","@rate"]]},"id":"524d6d13-0fb1-4fc9-aed5-d80edfee83da","type":"HoverTool"},{"attributes":{"callback":null,"factors":["Dec","Nov","Oct","Sep","Aug","Jul","Jun","May","Apr","Mar","Feb","Jan"]},"id":"4696616d-6c56-49c8-b426-7f5484ebfa33","type":"FactorRange"},{"attributes":{"overlay":{"id":"01cbb3f5-94bb-4ccd-abea-b426b8aad4c9","type":"BoxAnnotation"},"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"}},"id":"d5d71459-3e99-424d-a92f-30bcbd9409d2","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"}},"id":"e921d507-7d70-4a89-a44a-471d6853722c","type":"PanTool"},{"attributes":{"fill_color":{"field":"rate","transform":{"id":"dbb96b67-00aa-40e9-aabd-ae72aee76a0b","type":"LinearColorMapper"}},"height":{"units":"data","value":1},"line_color":{"value":null},"width":{"units":"data","value":1},"x":{"field":"year"},"y":{"field":"month"}},"id":"70d1e05d-af91-4557-907f-aa6e1a5f28af","type":"Rect"},{"attributes":{},"id":"04c51c59-0f5b-45f3-8458-d3e52f7befd2","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"},"ticker":{"id":"7051cd56-7342-4885-9ae7-268ecb1cf602","type":"CategoricalTicker"}},"id":"cdf2e352-c1a7-4400-b696-bb8ba6b8b93d","type":"Grid"},{"attributes":{"plot":null,"text":"US Unemployment (1948 - 2013)"},"id":"8c80e753-0ab8-4cdf-a0d5-5d74bf300ef2","type":"Title"},{"attributes":{"above":[{"id":"24d1bacd-1bdd-4fc5-8197-163a9ac66e44","type":"CategoricalAxis"}],"left":[{"id":"92a5c963-f1e8-46d9-88eb-2bde91e5093c","type":"CategoricalAxis"}],"plot_height":400,"plot_width":900,"renderers":[{"id":"24d1bacd-1bdd-4fc5-8197-163a9ac66e44","type":"CategoricalAxis"},{"id":"cdf2e352-c1a7-4400-b696-bb8ba6b8b93d","type":"Grid"},{"id":"92a5c963-f1e8-46d9-88eb-2bde91e5093c","type":"CategoricalAxis"},{"id":"b3058201-6c83-46a9-b25f-609a4851c7f5","type":"Grid"},{"id":"01cbb3f5-94bb-4ccd-abea-b426b8aad4c9","type":"BoxAnnotation"},{"id":"bc1fbacb-d071-4267-bfba-3ea58a27cdd3","type":"GlyphRenderer"}],"title":{"id":"8c80e753-0ab8-4cdf-a0d5-5d74bf300ef2","type":"Title"},"tool_events":{"id":"866fc592-6ce1-4f9b-a1ef-44f6c2a0a7c9","type":"ToolEvents"},"toolbar":{"id":"74643d2e-0bb6-443b-9865-31dc2e12ef3a","type":"Toolbar"},"x_range":{"id":"42165f13-0550-4216-8d1b-6f49008d199c","type":"FactorRange"},"y_range":{"id":"4696616d-6c56-49c8-b426-7f5484ebfa33","type":"FactorRange"}},"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"524d6d13-0fb1-4fc9-aed5-d80edfee83da","type":"HoverTool"},{"id":"d7408a24-2507-4c03-b004-ccaa5107af7b","type":"SaveTool"},{"id":"e921d507-7d70-4a89-a44a-471d6853722c","type":"PanTool"},{"id":"d5d71459-3e99-424d-a92f-30bcbd9409d2","type":"BoxZoomTool"},{"id":"af313e49-97cb-482f-b07a-f3ba323ff38f","type":"WheelZoomTool"}]},"id":"74643d2e-0bb6-443b-9865-31dc2e12ef3a","type":"Toolbar"},{"attributes":{},"id":"5b60f0f8-e749-4b1c-87ee-b3773339bae6","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013"]},"id":"42165f13-0550-4216-8d1b-6f49008d199c","type":"FactorRange"},{"attributes":{},"id":"866fc592-6ce1-4f9b-a1ef-44f6c2a0a7c9","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e1fb3c38-d92c-4b54-89b9-5850b91d3433","type":"ColumnDataSource"},"glyph":{"id":"70d1e05d-af91-4557-907f-aa6e1a5f28af","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"61398d63-61e8-4c5c-a68c-4f8fd9f2745b","type":"Rect"},"selection_glyph":null},"id":"bc1fbacb-d071-4267-bfba-3ea58a27cdd3","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"},"ticker":{"id":"04c51c59-0f5b-45f3-8458-d3e52f7befd2","type":"CategoricalTicker"}},"id":"b3058201-6c83-46a9-b25f-609a4851c7f5","type":"Grid"},{"attributes":{"plot":{"id":"798916ee-8b47-44d5-8539-9ab02bead273","subtype":"Figure","type":"Plot"}},"id":"d7408a24-2507-4c03-b004-ccaa5107af7b","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"year"},"y":{"field":"month"}},"id":"61398d63-61e8-4c5c-a68c-4f8fd9f2745b","type":"Rect"}],"root_ids":["798916ee-8b47-44d5-8539-9ab02bead273"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"c6286ad3-1627-48be-96bd-2e0eae2c3df6","elementid":"d1d624d2-51ef-4b23-ab86-d0261dd2e7db","modelid":"798916ee-8b47-44d5-8539-9ab02bead273"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});