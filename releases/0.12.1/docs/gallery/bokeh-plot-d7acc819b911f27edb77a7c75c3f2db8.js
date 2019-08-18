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
      };var element = document.getElementById("c20db05f-7dcf-45dc-9824-0f756d7c0f3c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c20db05f-7dcf-45dc-9824-0f756d7c0f3c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"91229b15-662a-4d3f-923d-f832de7860d6":{"roots":{"references":[{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"8b5864e6-8650-4381-8789-ceaaaafc7e87","type":"DaysTicker"},{"attributes":{"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"}},"id":"c827cf07-e65f-445c-b0a3-eecea639a533","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[1.1899999999999977,1.5600000000000023,1.3700000000000045,1.75,4.689999999999998,1.4399999999999977,0.37999999999999545,0.8100000000000023,4.1200000000000045,6.0,0.4399999999999977,5.060000000000002,0.6899999999999977,2.0,0.25,2.0600000000000023,1.6200000000000045,4.060000000000002,0.3199999999999932,0.6200000000000045,2.3700000000000045,0.5699999999999932,0.18999999999999773,0.12999999999999545,0.8700000000000045],"x":[951868800000.0,951955200000.0,952041600000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,953078400000.0,953251200000.0,953596800000.0,953683200000.0,953769600000.0,954201600000.0,954288000000.0,954460800000.0,955065600000.0,955929600000.0,956016000000.0,956188800000.0,956620800000.0,956793600000.0,957139200000.0,957312000000.0,957398400000.0,957484800000.0],"y":[90.215,92.59,95.435,94.685,97.655,100.28,97.81,94.965,97.31,99.75,103.03,109.34,103.965,106.19,106.125,88.03,75.06,78.53,78.78,69.06,68.625,73.155,70.465,70.375,70.685]}},"id":"3dfb257c-6d19-422e-8c28-166f82c13db3","type":"ColumnDataSource"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"783ca1a8-7306-40c3-921a-82367c26378e","type":"AdaptiveTicker"},{"attributes":{"days":[1,15]},"id":"c4b66acd-c277-4319-85ae-b62d1cbbcf2a","type":"DaysTicker"},{"attributes":{},"id":"ba22f6a7-2291-46dc-8a16-ef8875a2af91","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0ec1f535-9567-4675-8f1a-a64b4a8ca394","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"},"ticker":{"id":"b974eee7-a8bb-4604-b4c0-06904233900b","type":"DatetimeTicker"}},"id":"4fc8e39e-39a0-479c-aac4-2c724a3a2a1f","type":"DatetimeAxis"},{"attributes":{"callback":null},"id":"9d1d4ec5-0eef-4cf6-af1d-c56aab1b4506","type":"DataRange1d"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"8077b697-e5ec-463a-b59b-b40258fd8efc","type":"Segment"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[5.3799999999999955,3.25,3.5,0.5699999999999932,1.3799999999999955,0.9300000000000068,3.7099999999999937,2.819999999999993,3.569999999999993,3.0,1.8799999999999955,1.8700000000000045,2.5600000000000023,1.25,2.75,1.6200000000000045,5.0,2.75,0.6299999999999955,2.0,1.0,2.9399999999999977,1.1299999999999955,2.3799999999999955,1.5600000000000023],"x":[952300800000.0,952387200000.0,952992000000.0,953164800000.0,953510400000.0,953856000000.0,954115200000.0,954374400000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,956102400000.0,956534400000.0,956707200000.0,956880000000.0,957225600000.0,957744000000.0,957830400000.0,957916800000.0],"y":[93.31,94.495,96.87,95.655,98.06,112.155,105.91499999999999,104.78,92.655,90.06,87.31,86.935,87.34,84.495,80.745,80.06,76.62,80.065,66.935,69.0,70.25,71.34,70.375,69.0,66.97]}},"id":"13e87ac8-558d-4862-b2e5-1c80ede251bc","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#D5E1DD"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"f460981b-f0c1-4401-a20b-b0eef596c98b","type":"Rect"},{"attributes":{},"id":"8f7a5a71-d3e6-48c5-986e-09518e73e215","type":"ToolEvents"},{"attributes":{"data_source":{"id":"3dfb257c-6d19-422e-8c28-166f82c13db3","type":"ColumnDataSource"},"glyph":{"id":"f460981b-f0c1-4401-a20b-b0eef596c98b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"585ddd08-fcda-49ea-802e-ce637d4ab1f8","type":"Rect"},"selection_glyph":null},"id":"cb6b1dde-a5ba-4069-8c04-766fa5185763","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b8746645-46f7-46ce-9a77-2eb60af8b8cc","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"}},"id":"082de297-8049-42c2-9f2e-9e443c7294f0","type":"SaveTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"cba3faa0-6da2-4762-bd34-539a17b97ad6","type":"AdaptiveTicker"},{"attributes":{"overlay":{"id":"b8746645-46f7-46ce-9a77-2eb60af8b8cc","type":"BoxAnnotation"},"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"}},"id":"599e6dbd-346a-41fc-88ce-f12db4a55ed5","type":"BoxZoomTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"5be807cc-56e1-4f30-ae16-e0cd49a2013c","type":"MonthsTicker"},{"attributes":{},"id":"a313b87e-a608-4300-9817-1392a9560bf9","type":"YearsTicker"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"},"ticker":{"id":"b974eee7-a8bb-4604-b4c0-06904233900b","type":"DatetimeTicker"}},"id":"4352daa7-1d22-4786-a6a3-883ed462ecab","type":"Grid"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba22f6a7-2291-46dc-8a16-ef8875a2af91","type":"BasicTicker"}},"id":"6c366854-7ca0-47db-a572-a745aadee197","type":"Grid"},{"attributes":{"days":[1,8,15,22]},"id":"99058097-3410-4c74-b97f-8e79460d01ce","type":"DaysTicker"},{"attributes":{},"id":"6c878734-84d6-4708-b2c4-5a07e9098e15","type":"BasicTickFormatter"},{"attributes":{"months":[0,4,8]},"id":"0e84aba9-5343-4d5e-b562-69eb52f325d6","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"13e87ac8-558d-4862-b2e5-1c80ede251bc","type":"ColumnDataSource"},"glyph":{"id":"a9c4ad77-9891-42bd-8330-e1db6e8740b6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"0851f7df-381f-42b4-84dd-c7e18a6c72f9","type":"Rect"},"selection_glyph":null},"id":"e8ac0606-e48f-43a7-a86b-0b53f6d59ba6","type":"GlyphRenderer"},{"attributes":{},"id":"0ec1f535-9567-4675-8f1a-a64b4a8ca394","type":"DatetimeTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e6155521-8980-4ec9-9ec5-39cc3d6ffd89","type":"Segment"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"2df95dc1-7f23-4931-846b-0e80c4b47d58","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"143865e4-0d33-43a3-9ec6-833cb7e656f3","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"4241a7c7-1a75-4dfc-a6e2-26ba825e21c2","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"0851f7df-381f-42b4-84dd-c7e18a6c72f9","type":"Rect"},{"attributes":{"formatter":{"id":"6c878734-84d6-4708-b2c4-5a07e9098e15","type":"BasicTickFormatter"},"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba22f6a7-2291-46dc-8a16-ef8875a2af91","type":"BasicTicker"}},"id":"2bfd2e63-532a-41f5-9cb3-3dc76a3f8920","type":"LinearAxis"},{"attributes":{"num_minor_ticks":5},"id":"b974eee7-a8bb-4604-b4c0-06904233900b","type":"DatetimeTicker"},{"attributes":{"below":[{"id":"4fc8e39e-39a0-479c-aac4-2c724a3a2a1f","type":"DatetimeAxis"}],"left":[{"id":"2bfd2e63-532a-41f5-9cb3-3dc76a3f8920","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"4fc8e39e-39a0-479c-aac4-2c724a3a2a1f","type":"DatetimeAxis"},{"id":"4352daa7-1d22-4786-a6a3-883ed462ecab","type":"Grid"},{"id":"2bfd2e63-532a-41f5-9cb3-3dc76a3f8920","type":"LinearAxis"},{"id":"6c366854-7ca0-47db-a572-a745aadee197","type":"Grid"},{"id":"b8746645-46f7-46ce-9a77-2eb60af8b8cc","type":"BoxAnnotation"},{"id":"c5ee26c8-327f-433c-8010-b292ae86ee0b","type":"GlyphRenderer"},{"id":"cb6b1dde-a5ba-4069-8c04-766fa5185763","type":"GlyphRenderer"},{"id":"e8ac0606-e48f-43a7-a86b-0b53f6d59ba6","type":"GlyphRenderer"}],"title":{"id":"4241a7c7-1a75-4dfc-a6e2-26ba825e21c2","type":"Title"},"tool_events":{"id":"8f7a5a71-d3e6-48c5-986e-09518e73e215","type":"ToolEvents"},"toolbar":{"id":"ac2bcf0c-b034-4cb6-8dc3-f4260423bf33","type":"Toolbar"},"x_range":{"id":"9d1d4ec5-0eef-4cf6-af1d-c56aab1b4506","type":"DataRange1d"},"y_range":{"id":"c207d9f2-0313-4d85-99a5-95a9f3f01988","type":"DataRange1d"}},"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"}},"id":"56ef3bb7-e9a5-4716-8bd0-081ca67fe52d","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"585ddd08-fcda-49ea-802e-ce637d4ab1f8","type":"Rect"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"bb47db90-8c0b-4ba9-97a6-73a37049aaba","type":"DaysTicker"},{"attributes":{"data_source":{"id":"52782cec-14ad-48ab-9480-1251764f348b","type":"ColumnDataSource"},"glyph":{"id":"8077b697-e5ec-463a-b59b-b40258fd8efc","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"e6155521-8980-4ec9-9ec5-39cc3d6ffd89","type":"Segment"},"selection_glyph":null},"id":"c5ee26c8-327f-433c-8010-b292ae86ee0b","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#F2583E"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9c4ad77-9891-42bd-8330-e1db6e8740b6","type":"Rect"},{"attributes":{"callback":null},"id":"c207d9f2-0313-4d85-99a5-95a9f3f01988","type":"DataRange1d"},{"attributes":{"plot":{"id":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62","subtype":"Figure","type":"Plot"}},"id":"9022c1a2-a415-4a5e-9795-d87e5b0692c2","type":"PanTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"5192aeca-4b8f-404a-a579-4668980c2410","type":"MonthsTicker"},{"attributes":{"callback":null,"column_names":["y1","x0","x1","y0"],"data":{"x0":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"x1":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"y0":[94.09,95.37,98.87,97.37,97.5,96.19,100.0,102.5,100.25,99.25,96.62,96.69,99.5,99.75,103.12,105.62,112.87,115.0,108.25,107.44,108.94,108.62,108.25,96.5,92.0,88.5,88.0,89.37,88.62,86.06,82.25,82.25,79.5,76.0,81.94,81.5,79.87,68.0,69.5,71.12,69.94,71.0,74.0,73.5,70.81,71.25,71.81,71.37,70.44,67.87],"y1":[88.94,91.12,93.87,90.12,91.94,91.0,95.0,99.5,97.5,95.12,93.69,93.25,94.5,96.5,96.5,101.12,106.62,109.56,103.94,102.37,105.12,102.5,104.12,90.0,84.94,85.87,85.27,85.0,86.0,83.5,78.75,79.0,73.25,73.0,75.87,78.12,77.5,65.0,67.62,67.37,67.37,68.25,71.69,69.5,68.81,69.31,69.87,69.69,67.5,65.75]}},"id":"52782cec-14ad-48ab-9480-1251764f348b","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9022c1a2-a415-4a5e-9795-d87e5b0692c2","type":"PanTool"},{"id":"56ef3bb7-e9a5-4716-8bd0-081ca67fe52d","type":"WheelZoomTool"},{"id":"599e6dbd-346a-41fc-88ce-f12db4a55ed5","type":"BoxZoomTool"},{"id":"c827cf07-e65f-445c-b0a3-eecea639a533","type":"ResetTool"},{"id":"082de297-8049-42c2-9f2e-9e443c7294f0","type":"SaveTool"}]},"id":"ac2bcf0c-b034-4cb6-8dc3-f4260423bf33","type":"Toolbar"}],"root_ids":["03c5ccb0-966a-4f82-9d28-9102cfa0ac62"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"91229b15-662a-4d3f-923d-f832de7860d6","elementid":"c20db05f-7dcf-45dc-9824-0f756d7c0f3c","modelid":"03c5ccb0-966a-4f82-9d28-9102cfa0ac62"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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