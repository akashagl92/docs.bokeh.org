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
      };var element = document.getElementById("3103b217-4a60-49c5-b2af-52a1b7526fba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3103b217-4a60-49c5-b2af-52a1b7526fba' but no matching script tag was found. ")
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
                  var docs_json = {"3c468fe4-dee2-4f3f-b5b3-f5db90ffa6e9":{"roots":{"references":[{"attributes":{"formatter":{"id":"1714a9a0-78f4-4cc8-bff0-0d7f328c8e7f","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"},"ticker":{"id":"98259e40-2734-4529-a7f0-f04a6d12189c","type":"DatetimeTicker"}},"id":"3c37a6af-6a45-48ea-bdbc-41e4d6cd0585","type":"DatetimeAxis"},{"attributes":{"data_source":{"id":"5ee3246d-d4de-4bff-8f66-284594cce29e","type":"ColumnDataSource"},"glyph":{"id":"20177cbd-ed2d-492e-ae75-dad1df070c61","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"de47f14a-73a1-425d-9413-8b574f073522","type":"Rect"},"selection_glyph":null},"id":"cf307c9d-e00d-41a6-9d7f-2021d543beea","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"875a2a74-1792-414b-88f0-389483d0f30a","type":"Title"},{"attributes":{},"id":"b988bd5a-f367-4bf4-861f-ac46a1a712f0","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"de47f14a-73a1-425d-9413-8b574f073522","type":"Rect"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"6533dd91-d460-4f97-8445-e576e88ef69c","type":"DaysTicker"},{"attributes":{"below":[{"id":"3c37a6af-6a45-48ea-bdbc-41e4d6cd0585","type":"DatetimeAxis"}],"left":[{"id":"408cfaa9-d349-4702-88b1-3c3917d1d130","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"3c37a6af-6a45-48ea-bdbc-41e4d6cd0585","type":"DatetimeAxis"},{"id":"1f8ae4f5-474b-4749-9874-e89b84424fc2","type":"Grid"},{"id":"408cfaa9-d349-4702-88b1-3c3917d1d130","type":"LinearAxis"},{"id":"9436ef3b-e3db-4f78-998f-dbbe80ef083b","type":"Grid"},{"id":"f566fbd2-113c-4dd2-990c-c35161b22551","type":"BoxAnnotation"},{"id":"425eda7e-c574-4ddc-a3ab-60959cc87fca","type":"GlyphRenderer"},{"id":"5ee820a1-24dc-48d5-bccb-a7c36318909b","type":"GlyphRenderer"},{"id":"cf307c9d-e00d-41a6-9d7f-2021d543beea","type":"GlyphRenderer"}],"title":{"id":"875a2a74-1792-414b-88f0-389483d0f30a","type":"Title"},"tool_events":{"id":"0467e32c-f371-4cf5-84bf-6a85e07a9f15","type":"ToolEvents"},"toolbar":{"id":"6ab84ba9-d442-4998-b263-d38f97c3201c","type":"Toolbar"},"x_range":{"id":"be1c237f-f9ca-43af-9254-3dd81bd4424c","type":"DataRange1d"},"y_range":{"id":"9cf86768-ca94-4e41-b03f-aee5260c82c2","type":"DataRange1d"}},"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"},{"attributes":{"months":[0,6]},"id":"c80cf81f-a579-4e27-8d43-e2c08c1f1e63","type":"MonthsTicker"},{"attributes":{"overlay":{"id":"f566fbd2-113c-4dd2-990c-c35161b22551","type":"BoxAnnotation"},"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"}},"id":"439b2a68-f9f6-4419-9c5d-a96302bc86a9","type":"BoxZoomTool"},{"attributes":{"num_minor_ticks":5},"id":"98259e40-2734-4529-a7f0-f04a6d12189c","type":"DatetimeTicker"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"},"ticker":{"id":"98259e40-2734-4529-a7f0-f04a6d12189c","type":"DatetimeTicker"}},"id":"1f8ae4f5-474b-4749-9874-e89b84424fc2","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[1.1899999999999977,1.5600000000000023,1.3700000000000045,1.75,4.689999999999998,1.4399999999999977,0.37999999999999545,0.8100000000000023,4.1200000000000045,6.0,0.4399999999999977,5.060000000000002,0.6899999999999977,2.0,0.25,2.0600000000000023,1.6200000000000045,4.060000000000002,0.3199999999999932,0.6200000000000045,2.3700000000000045,0.5699999999999932,0.18999999999999773,0.12999999999999545,0.8700000000000045],"x":[951868800000.0,951955200000.0,952041600000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,953078400000.0,953251200000.0,953596800000.0,953683200000.0,953769600000.0,954201600000.0,954288000000.0,954460800000.0,955065600000.0,955929600000.0,956016000000.0,956188800000.0,956620800000.0,956793600000.0,957139200000.0,957312000000.0,957398400000.0,957484800000.0],"y":[90.215,92.59,95.435,94.685,97.655,100.28,97.81,94.965,97.31,99.75,103.03,109.34,103.965,106.19,106.125,88.03,75.06,78.53,78.78,69.06,68.625,73.155,70.465,70.375,70.685]}},"id":"a6dc8d1c-4e0c-4777-803f-3ea6dfd9d0db","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"cd62f0b4-4d23-40bc-a582-3e8e420b869a","type":"BasicTickFormatter"},"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"},"ticker":{"id":"b988bd5a-f367-4bf4-861f-ac46a1a712f0","type":"BasicTicker"}},"id":"408cfaa9-d349-4702-88b1-3c3917d1d130","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"2699f83a-6412-45d3-9d23-71710121c482","type":"Rect"},{"attributes":{},"id":"1714a9a0-78f4-4cc8-bff0-0d7f328c8e7f","type":"DatetimeTickFormatter"},{"attributes":{"callback":null},"id":"be1c237f-f9ca-43af-9254-3dd81bd4424c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5f525bc6-3425-419b-9e22-6e782495483c","type":"ColumnDataSource"},"glyph":{"id":"0fe6cd01-f30e-481d-b09a-a79595e2f501","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"4eb8cb2b-0b6d-4a9d-a40f-a1f017afbb7f","type":"Segment"},"selection_glyph":null},"id":"425eda7e-c574-4ddc-a3ab-60959cc87fca","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y1","x0","x1","y0"],"data":{"x0":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"x1":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"y0":[94.09,95.37,98.87,97.37,97.5,96.19,100.0,102.5,100.25,99.25,96.62,96.69,99.5,99.75,103.12,105.62,112.87,115.0,108.25,107.44,108.94,108.62,108.25,96.5,92.0,88.5,88.0,89.37,88.62,86.06,82.25,82.25,79.5,76.0,81.94,81.5,79.87,68.0,69.5,71.12,69.94,71.0,74.0,73.5,70.81,71.25,71.81,71.37,70.44,67.87],"y1":[88.94,91.12,93.87,90.12,91.94,91.0,95.0,99.5,97.5,95.12,93.69,93.25,94.5,96.5,96.5,101.12,106.62,109.56,103.94,102.37,105.12,102.5,104.12,90.0,84.94,85.87,85.27,85.0,86.0,83.5,78.75,79.0,73.25,73.0,75.87,78.12,77.5,65.0,67.62,67.37,67.37,68.25,71.69,69.5,68.81,69.31,69.87,69.69,67.5,65.75]}},"id":"5f525bc6-3425-419b-9e22-6e782495483c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"}},"id":"8adf1b5e-0cd3-4000-97ef-9a6166b2c141","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8adf1b5e-0cd3-4000-97ef-9a6166b2c141","type":"PanTool"},{"id":"6e80fe9a-5d4e-4518-9f1b-8f12c0e8eaed","type":"WheelZoomTool"},{"id":"439b2a68-f9f6-4419-9c5d-a96302bc86a9","type":"BoxZoomTool"},{"id":"e0daad7a-6df4-4e34-850a-01626e91b2a2","type":"ResetTool"},{"id":"cbf52c66-3043-4a63-b6b8-1da0b6dcecea","type":"SaveTool"}]},"id":"6ab84ba9-d442-4998-b263-d38f97c3201c","type":"Toolbar"},{"attributes":{"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"}},"id":"6e80fe9a-5d4e-4518-9f1b-8f12c0e8eaed","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#D5E1DD"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"d06d3700-482c-4dd6-8496-db88fe78aa0d","type":"Rect"},{"attributes":{"days":[1,15]},"id":"55aa4fdc-a63f-46fe-81fe-0152f35e2184","type":"DaysTicker"},{"attributes":{"callback":null},"id":"9cf86768-ca94-4e41-b03f-aee5260c82c2","type":"DataRange1d"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"ce01da46-9c0c-48c7-818b-47130be26c94","type":"AdaptiveTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"668f9dfe-02e2-4bd4-a4d1-777bb1fbda6c","type":"MonthsTicker"},{"attributes":{"months":[0,4,8]},"id":"ad7a0529-c13b-4b39-8ad6-90d8cb0f3ce9","type":"MonthsTicker"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[5.3799999999999955,3.25,3.5,0.5699999999999932,1.3799999999999955,0.9300000000000068,3.7099999999999937,2.819999999999993,3.569999999999993,3.0,1.8799999999999955,1.8700000000000045,2.5600000000000023,1.25,2.75,1.6200000000000045,5.0,2.75,0.6299999999999955,2.0,1.0,2.9399999999999977,1.1299999999999955,2.3799999999999955,1.5600000000000023],"x":[952300800000.0,952387200000.0,952992000000.0,953164800000.0,953510400000.0,953856000000.0,954115200000.0,954374400000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,956102400000.0,956534400000.0,956707200000.0,956880000000.0,957225600000.0,957744000000.0,957830400000.0,957916800000.0],"y":[93.31,94.495,96.87,95.655,98.06,112.155,105.91499999999999,104.78,92.655,90.06,87.31,86.935,87.34,84.495,80.745,80.06,76.62,80.065,66.935,69.0,70.25,71.34,70.375,69.0,66.97]}},"id":"5ee3246d-d4de-4bff-8f66-284594cce29e","type":"ColumnDataSource"},{"attributes":{},"id":"0467e32c-f371-4cf5-84bf-6a85e07a9f15","type":"ToolEvents"},{"attributes":{},"id":"cd62f0b4-4d23-40bc-a582-3e8e420b869a","type":"BasicTickFormatter"},{"attributes":{},"id":"d0a0410c-28ef-484f-a343-7053dac39e5c","type":"YearsTicker"},{"attributes":{"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"}},"id":"e0daad7a-6df4-4e34-850a-01626e91b2a2","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4eb8cb2b-0b6d-4a9d-a40f-a1f017afbb7f","type":"Segment"},{"attributes":{"fill_color":{"value":"#F2583E"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"20177cbd-ed2d-492e-ae75-dad1df070c61","type":"Rect"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"},"ticker":{"id":"b988bd5a-f367-4bf4-861f-ac46a1a712f0","type":"BasicTicker"}},"id":"9436ef3b-e3db-4f78-998f-dbbe80ef083b","type":"Grid"},{"attributes":{"days":[1,8,15,22]},"id":"9877bf76-7fd1-455d-a7e6-068aa996140e","type":"DaysTicker"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0fe6cd01-f30e-481d-b09a-a79595e2f501","type":"Segment"},{"attributes":{"plot":{"id":"a206b7b8-27f2-42e5-a6ee-9f430e08e704","subtype":"Figure","type":"Plot"}},"id":"cbf52c66-3043-4a63-b6b8-1da0b6dcecea","type":"SaveTool"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"e0240310-1d9a-4c49-9f42-4ca3b3112042","type":"AdaptiveTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"8d074818-0027-45a7-aecd-7ebb58e31b65","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"cb3ade29-92ec-405d-b0a0-8bcb33c2853a","type":"AdaptiveTicker"},{"attributes":{"data_source":{"id":"a6dc8d1c-4e0c-4777-803f-3ea6dfd9d0db","type":"ColumnDataSource"},"glyph":{"id":"d06d3700-482c-4dd6-8496-db88fe78aa0d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"2699f83a-6412-45d3-9d23-71710121c482","type":"Rect"},"selection_glyph":null},"id":"5ee820a1-24dc-48d5-bccb-a7c36318909b","type":"GlyphRenderer"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"64858a2e-3a3d-4697-9771-4a807b0b86a1","type":"MonthsTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f566fbd2-113c-4dd2-990c-c35161b22551","type":"BoxAnnotation"}],"root_ids":["a206b7b8-27f2-42e5-a6ee-9f430e08e704"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"3c468fe4-dee2-4f3f-b5b3-f5db90ffa6e9","elementid":"3103b217-4a60-49c5-b2af-52a1b7526fba","modelid":"a206b7b8-27f2-42e5-a6ee-9f430e08e704"}];
                  
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