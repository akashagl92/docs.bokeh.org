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
      };var element = document.getElementById("f5730704-f758-4c5e-92e6-34c364d3f733");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5730704-f758-4c5e-92e6-34c364d3f733' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"93150432-bb76-407f-b460-c118bc17baa6":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"037fc759-0384-4afc-807c-f3b3a2013030","type":"BoxAnnotation"},{"attributes":{"num_minor_ticks":5},"id":"99cf7721-0689-4d3f-a4d6-b8a4d6c24237","type":"DatetimeTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"1a410b97-8618-48d5-ac5a-27b0839e2ca9","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"ed2a7d33-802a-4354-beb9-0adc4376fe0f","type":"DaysTicker"},{"attributes":{"data_source":{"id":"cdafce73-102b-498a-968c-826e9c99715a","type":"ColumnDataSource"},"glyph":{"id":"136abf5a-da8d-4b74-9333-5e2da4364c78","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"4e8d2254-7b3a-43d8-bfd1-0ef8f07d27c1","type":"Rect"},"selection_glyph":null},"id":"bd4c2613-57e5-49bc-869b-e4429f7bce68","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#D5E1DD"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4177f24-a929-4fb3-8fb6-a60316e74d69","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e8d2254-7b3a-43d8-bfd1-0ef8f07d27c1","type":"Rect"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5ee8f711-b939-4c59-a5fb-ff5c32278eb2","type":"Segment"},{"attributes":{"data_source":{"id":"0ec1f64c-d103-4b6d-b5f7-4a588a746ed1","type":"ColumnDataSource"},"glyph":{"id":"5ee8f711-b939-4c59-a5fb-ff5c32278eb2","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"f6ccb7ce-4770-4aef-b336-0d5c53304bcd","type":"Segment"},"selection_glyph":null},"id":"7dc06d4d-58a9-4538-878f-2116f8f0f599","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"}},"id":"d0ec0cc0-7f2d-470c-af98-ada12ffbb5eb","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"9322dfdb-7f30-439d-924a-5e029797c0ea","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[1.1899999999999977,1.5600000000000023,1.3700000000000045,1.75,4.689999999999998,1.4399999999999977,0.37999999999999545,0.8100000000000023,4.1200000000000045,6.0,0.4399999999999977,5.060000000000002,0.6899999999999977,2.0,0.25,2.0600000000000023,1.6200000000000045,4.060000000000002,0.3199999999999932,0.6200000000000045,2.3700000000000045,0.5699999999999932,0.18999999999999773,0.12999999999999545,0.8700000000000045],"x":[951868800000.0,951955200000.0,952041600000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,953078400000.0,953251200000.0,953596800000.0,953683200000.0,953769600000.0,954201600000.0,954288000000.0,954460800000.0,955065600000.0,955929600000.0,956016000000.0,956188800000.0,956620800000.0,956793600000.0,957139200000.0,957312000000.0,957398400000.0,957484800000.0],"y":[90.215,92.59,95.435,94.685,97.655,100.28,97.81,94.965,97.31,99.75,103.03,109.34,103.965,106.19,106.125,88.03,75.06,78.53,78.78,69.06,68.625,73.155,70.465,70.375,70.685]}},"id":"8c769b7f-af04-4f23-b2e2-2e943dfa3c76","type":"ColumnDataSource"},{"attributes":{},"id":"e9cab757-551b-4f38-acbf-383e4750a870","type":"BasicTicker"},{"attributes":{"callback":null},"id":"87eda078-b778-4b9e-90e0-e1e36bac771b","type":"DataRange1d"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"2d939393-8343-4b7f-a919-d24e64a39f9a","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f6ccb7ce-4770-4aef-b336-0d5c53304bcd","type":"Segment"},{"attributes":{"days":[1,15]},"id":"b56a953f-a86f-4f43-88f0-fcf5539c0270","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"13d8467c-5566-4e45-8769-60dac038f63c","type":"AdaptiveTicker"},{"attributes":{},"id":"28c3681e-0be1-40f8-ba45-f02661bcf9f8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y1","x0","x1","y0"],"data":{"x0":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"x1":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"y0":[94.09,95.37,98.87,97.37,97.5,96.19,100.0,102.5,100.25,99.25,96.62,96.69,99.5,99.75,103.12,105.62,112.87,115.0,108.25,107.44,108.94,108.62,108.25,96.5,92.0,88.5,88.0,89.37,88.62,86.06,82.25,82.25,79.5,76.0,81.94,81.5,79.87,68.0,69.5,71.12,69.94,71.0,74.0,73.5,70.81,71.25,71.81,71.37,70.44,67.87],"y1":[88.94,91.12,93.87,90.12,91.94,91.0,95.0,99.5,97.5,95.12,93.69,93.25,94.5,96.5,96.5,101.12,106.62,109.56,103.94,102.37,105.12,102.5,104.12,90.0,84.94,85.87,85.27,85.0,86.0,83.5,78.75,79.0,73.25,73.0,75.87,78.12,77.5,65.0,67.62,67.37,67.37,68.25,71.69,69.5,68.81,69.31,69.87,69.69,67.5,65.75]}},"id":"0ec1f64c-d103-4b6d-b5f7-4a588a746ed1","type":"ColumnDataSource"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"41545e02-57ff-403a-91e2-ae9bb9f8421f","type":"MonthsTicker"},{"attributes":{"fill_color":{"value":"#F2583E"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"136abf5a-da8d-4b74-9333-5e2da4364c78","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fda5ad51-be2b-4e05-98bc-5232f5a42aea","type":"PanTool"},{"id":"859a80fe-7827-4c01-8be4-61db6d972ab9","type":"WheelZoomTool"},{"id":"45ac9734-8e38-4296-9ded-75d59e7da9bc","type":"BoxZoomTool"},{"id":"d0ec0cc0-7f2d-470c-af98-ada12ffbb5eb","type":"ResetTool"},{"id":"dbc31ac9-99b8-4a97-b47c-ba909d63e143","type":"SaveTool"}]},"id":"9a12158e-c807-460e-bda6-e221e05061cc","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[5.3799999999999955,3.25,3.5,0.5699999999999932,1.3799999999999955,0.9300000000000068,3.7099999999999937,2.819999999999993,3.569999999999993,3.0,1.8799999999999955,1.8700000000000045,2.5600000000000023,1.25,2.75,1.6200000000000045,5.0,2.75,0.6299999999999955,2.0,1.0,2.9399999999999977,1.1299999999999955,2.3799999999999955,1.5600000000000023],"x":[952300800000.0,952387200000.0,952992000000.0,953164800000.0,953510400000.0,953856000000.0,954115200000.0,954374400000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,956102400000.0,956534400000.0,956707200000.0,956880000000.0,957225600000.0,957744000000.0,957830400000.0,957916800000.0],"y":[93.31,94.495,96.87,95.655,98.06,112.155,105.91499999999999,104.78,92.655,90.06,87.31,86.935,87.34,84.495,80.745,80.06,76.62,80.065,66.935,69.0,70.25,71.34,70.375,69.0,66.97]}},"id":"cdafce73-102b-498a-968c-826e9c99715a","type":"ColumnDataSource"},{"attributes":{"months":[0,4,8]},"id":"caae1746-bb67-4295-b25d-6e4cf51b24e9","type":"MonthsTicker"},{"attributes":{},"id":"2e2beb22-7008-43e9-bf48-885a73a6c494","type":"YearsTicker"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"da2325f0-6f26-45d6-b8ed-83d9c546dd19","type":"AdaptiveTicker"},{"attributes":{"callback":null},"id":"69d02ac2-820b-42ef-a9c7-07cec3082ec5","type":"DataRange1d"},{"attributes":{"months":[0,6]},"id":"ecc2a168-9679-4449-b91d-6eb2332dea83","type":"MonthsTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"eec32a25-52f4-4a42-8cce-e9c224cfb5d1","type":"AdaptiveTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"6811ae38-964a-4437-97cd-ccb283276517","type":"MonthsTicker"},{"attributes":{"overlay":{"id":"037fc759-0384-4afc-807c-f3b3a2013030","type":"BoxAnnotation"},"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"}},"id":"45ac9734-8e38-4296-9ded-75d59e7da9bc","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"}},"id":"859a80fe-7827-4c01-8be4-61db6d972ab9","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"b51bd588-b3ff-432e-94f0-47fac008b52a","type":"DatetimeAxis"}],"left":[{"id":"11e15b3a-e436-49b6-b0b1-4d1819d9aad8","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"b51bd588-b3ff-432e-94f0-47fac008b52a","type":"DatetimeAxis"},{"id":"5270b2bd-f8dd-43da-b2fd-ffcd7fef62b2","type":"Grid"},{"id":"11e15b3a-e436-49b6-b0b1-4d1819d9aad8","type":"LinearAxis"},{"id":"fc89d552-bde0-4999-b9a8-fdb8ae2f9138","type":"Grid"},{"id":"037fc759-0384-4afc-807c-f3b3a2013030","type":"BoxAnnotation"},{"id":"7dc06d4d-58a9-4538-878f-2116f8f0f599","type":"GlyphRenderer"},{"id":"406a691e-33f5-468a-8cbe-2301d07d865c","type":"GlyphRenderer"},{"id":"bd4c2613-57e5-49bc-869b-e4429f7bce68","type":"GlyphRenderer"}],"title":{"id":"2d939393-8343-4b7f-a919-d24e64a39f9a","type":"Title"},"tool_events":{"id":"1e2313f8-9488-4aa8-a4cf-bb46cacd6ea0","type":"ToolEvents"},"toolbar":{"id":"9a12158e-c807-460e-bda6-e221e05061cc","type":"Toolbar"},"x_range":{"id":"87eda078-b778-4b9e-90e0-e1e36bac771b","type":"DataRange1d"},"y_range":{"id":"69d02ac2-820b-42ef-a9c7-07cec3082ec5","type":"DataRange1d"}},"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"}},"id":"dbc31ac9-99b8-4a97-b47c-ba909d63e143","type":"SaveTool"},{"attributes":{"formatter":{"id":"28c3681e-0be1-40f8-ba45-f02661bcf9f8","type":"BasicTickFormatter"},"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9cab757-551b-4f38-acbf-383e4750a870","type":"BasicTicker"}},"id":"11e15b3a-e436-49b6-b0b1-4d1819d9aad8","type":"LinearAxis"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"e8f34838-12f9-4e5d-9a16-5b8b1dcd88c0","type":"DaysTicker"},{"attributes":{},"id":"a9688884-6129-408a-bd3c-1ba10c2353e8","type":"DatetimeTickFormatter"},{"attributes":{},"id":"1e2313f8-9488-4aa8-a4cf-bb46cacd6ea0","type":"ToolEvents"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"},"ticker":{"id":"99cf7721-0689-4d3f-a4d6-b8a4d6c24237","type":"DatetimeTicker"}},"id":"5270b2bd-f8dd-43da-b2fd-ffcd7fef62b2","type":"Grid"},{"attributes":{"data_source":{"id":"8c769b7f-af04-4f23-b2e2-2e943dfa3c76","type":"ColumnDataSource"},"glyph":{"id":"d4177f24-a929-4fb3-8fb6-a60316e74d69","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"9322dfdb-7f30-439d-924a-5e029797c0ea","type":"Rect"},"selection_glyph":null},"id":"406a691e-33f5-468a-8cbe-2301d07d865c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"}},"id":"fda5ad51-be2b-4e05-98bc-5232f5a42aea","type":"PanTool"},{"attributes":{"formatter":{"id":"a9688884-6129-408a-bd3c-1ba10c2353e8","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"},"ticker":{"id":"99cf7721-0689-4d3f-a4d6-b8a4d6c24237","type":"DatetimeTicker"}},"id":"b51bd588-b3ff-432e-94f0-47fac008b52a","type":"DatetimeAxis"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"e865c60d-e6b1-4d04-a3e9-986e85371c36","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9cab757-551b-4f38-acbf-383e4750a870","type":"BasicTicker"}},"id":"fc89d552-bde0-4999-b9a8-fdb8ae2f9138","type":"Grid"}],"root_ids":["e865c60d-e6b1-4d04-a3e9-986e85371c36"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"93150432-bb76-407f-b460-c118bc17baa6","elementid":"f5730704-f758-4c5e-92e6-34c364d3f733","modelid":"e865c60d-e6b1-4d04-a3e9-986e85371c36"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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