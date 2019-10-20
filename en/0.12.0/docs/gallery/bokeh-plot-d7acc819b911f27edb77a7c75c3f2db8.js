document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("67843102-02a2-4b11-b78c-a621cc09891f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '67843102-02a2-4b11-b78c-a621cc09891f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"fe44e8da-cda7-4fe6-a4ad-c2b159da3142":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f22577c0-b47f-4832-8fd4-375530738a33","type":"Segment"},{"attributes":{"callback":null,"column_names":["y1","x0","x1","y0"],"data":{"x0":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"x1":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"y0":[94.09,95.37,98.87,97.37,97.5,96.19,100.0,102.5,100.25,99.25,96.62,96.69,99.5,99.75,103.12,105.62,112.87,115.0,108.25,107.44,108.94,108.62,108.25,96.5,92.0,88.5,88.0,89.37,88.62,86.06,82.25,82.25,79.5,76.0,81.94,81.5,79.87,68.0,69.5,71.12,69.94,71.0,74.0,73.5,70.81,71.25,71.81,71.37,70.44,67.87],"y1":[88.94,91.12,93.87,90.12,91.94,91.0,95.0,99.5,97.5,95.12,93.69,93.25,94.5,96.5,96.5,101.12,106.62,109.56,103.94,102.37,105.12,102.5,104.12,90.0,84.94,85.87,85.27,85.0,86.0,83.5,78.75,79.0,73.25,73.0,75.87,78.12,77.5,65.0,67.62,67.37,67.37,68.25,71.69,69.5,68.81,69.31,69.87,69.69,67.5,65.75]}},"id":"4c9d3234-81a9-4d73-af44-488235238327","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc108300-f920-4e7d-bd91-cdb613258161","type":"Rect"},{"attributes":{},"id":"0bdc1c38-3b80-4c4f-8f91-eb084f38af5d","type":"BasicTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"6b23bebe-c63f-4741-b323-4f528372c5a2","type":"DaysTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"6133f395-400a-40d1-b5b1-760863bbc75a","type":"Rect"},{"attributes":{"overlay":{"id":"8d1c4bb7-a00b-4c26-9af7-bfcf5374489b","type":"BoxAnnotation"},"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"}},"id":"ab3e3fd9-4929-4ae6-8873-1f3780bbfee8","type":"BoxZoomTool"},{"attributes":{},"id":"fa2eeead-5883-4a8e-9581-e5cca5f5cfe3","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"e4c39229-6325-447f-a26b-a9988c73d83c","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"69514f7f-f21a-4d90-a236-187efae35ce6","type":"Title"},{"attributes":{},"id":"f4986966-448f-49b1-bdd2-253ee151a672","type":"ToolEvents"},{"attributes":{"days":[1,15]},"id":"f6938e9a-415e-459a-890c-060065739326","type":"DaysTicker"},{"attributes":{"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"}},"id":"3681f369-7cd1-4fbf-b748-c42d608774f7","type":"PanTool"},{"attributes":{"formatter":{"id":"2653f98d-0f3e-49a1-be66-2f4f6aec61f5","type":"BasicTickFormatter"},"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bdc1c38-3b80-4c4f-8f91-eb084f38af5d","type":"BasicTicker"}},"id":"b96833c8-841a-4b17-9f59-63609f5613c0","type":"LinearAxis"},{"attributes":{"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"}},"id":"62ba43ad-cd66-431e-907a-74141b1be2a6","type":"ResetTool"},{"attributes":{"months":[0,4,8]},"id":"cac1d688-da20-4f4f-86eb-ea34f0cbaf9c","type":"MonthsTicker"},{"attributes":{"fill_color":{"value":"#F2583E"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf009bcc-5812-4b3a-94ef-c8ebab7a5687","type":"Rect"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"862312ca-3bfb-4118-a293-9eef066e37d2","type":"DatetimeTicker"}},"id":"f004712d-2779-44d9-9844-c9e1392e3ad5","type":"Grid"},{"attributes":{"num_minor_ticks":5},"id":"862312ca-3bfb-4118-a293-9eef066e37d2","type":"DatetimeTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"585d59b8-5cb8-4990-a596-955287e715f7","type":"AdaptiveTicker"},{"attributes":{},"id":"2653f98d-0f3e-49a1-be66-2f4f6aec61f5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"}},"id":"fe62fe6b-a3a0-45c9-92ec-6f1867337310","type":"SaveTool"},{"attributes":{"callback":null},"id":"1cd94c01-0a3a-4961-a1c8-fcb0492ad081","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[1.1899999999999977,1.5600000000000023,1.3700000000000045,1.75,4.689999999999998,1.4399999999999977,0.37999999999999545,0.8100000000000023,4.1200000000000045,6.0,0.4399999999999977,5.060000000000002,0.6899999999999977,2.0,0.25,2.0600000000000023,1.6200000000000045,4.060000000000002,0.3199999999999932,0.6200000000000045,2.3700000000000045,0.5699999999999932,0.18999999999999773,0.12999999999999545,0.8700000000000045],"x":[951868800000.0,951955200000.0,952041600000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,953078400000.0,953251200000.0,953596800000.0,953683200000.0,953769600000.0,954201600000.0,954288000000.0,954460800000.0,955065600000.0,955929600000.0,956016000000.0,956188800000.0,956620800000.0,956793600000.0,957139200000.0,957312000000.0,957398400000.0,957484800000.0],"y":[90.215,92.59,95.435,94.685,97.655,100.28,97.81,94.965,97.31,99.75,103.03,109.34,103.965,106.19,106.125,88.03,75.06,78.53,78.78,69.06,68.625,73.155,70.465,70.375,70.685]}},"id":"219dcf54-5f78-45d7-93f8-7f131742fcaa","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[5.3799999999999955,3.25,3.5,0.5699999999999932,1.3799999999999955,0.9300000000000068,3.7099999999999937,2.819999999999993,3.569999999999993,3.0,1.8799999999999955,1.8700000000000045,2.5600000000000023,1.25,2.75,1.6200000000000045,5.0,2.75,0.6299999999999955,2.0,1.0,2.9399999999999977,1.1299999999999955,2.3799999999999955,1.5600000000000023],"x":[952300800000.0,952387200000.0,952992000000.0,953164800000.0,953510400000.0,953856000000.0,954115200000.0,954374400000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,956102400000.0,956534400000.0,956707200000.0,956880000000.0,957225600000.0,957744000000.0,957830400000.0,957916800000.0],"y":[93.31,94.495,96.87,95.655,98.06,112.155,105.91499999999999,104.78,92.655,90.06,87.31,86.935,87.34,84.495,80.745,80.06,76.62,80.065,66.935,69.0,70.25,71.34,70.375,69.0,66.97]}},"id":"1f6e45c1-1a4e-45ee-9136-0ae23222c2e1","type":"ColumnDataSource"},{"attributes":{},"id":"7cbe4dfd-8bfb-472c-b6a6-0d1683b066b4","type":"YearsTicker"},{"attributes":{"fill_color":{"value":"#D5E1DD"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e3e27dc-903c-45f7-a946-1dd4af1346d4","type":"Rect"},{"attributes":{"callback":null},"id":"a9dfa6a7-5587-43c4-aadf-8f5002eafd3a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8d1c4bb7-a00b-4c26-9af7-bfcf5374489b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"fa2eeead-5883-4a8e-9581-e5cca5f5cfe3","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"862312ca-3bfb-4118-a293-9eef066e37d2","type":"DatetimeTicker"}},"id":"bfac2afa-c8e0-4296-9b7a-204bf9fc1dd5","type":"DatetimeAxis"},{"attributes":{"days":[1,8,15,22]},"id":"41a8a41d-b425-4b1b-aecf-0f08369aada6","type":"DaysTicker"},{"attributes":{"months":[0,6]},"id":"2c76b506-1910-4fc9-aafb-03b0eb291834","type":"MonthsTicker"},{"attributes":{"below":[{"id":"bfac2afa-c8e0-4296-9b7a-204bf9fc1dd5","type":"DatetimeAxis"}],"left":[{"id":"b96833c8-841a-4b17-9f59-63609f5613c0","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"bfac2afa-c8e0-4296-9b7a-204bf9fc1dd5","type":"DatetimeAxis"},{"id":"f004712d-2779-44d9-9844-c9e1392e3ad5","type":"Grid"},{"id":"b96833c8-841a-4b17-9f59-63609f5613c0","type":"LinearAxis"},{"id":"531d71c3-77da-44dd-8e78-58078f3fd133","type":"Grid"},{"id":"8d1c4bb7-a00b-4c26-9af7-bfcf5374489b","type":"BoxAnnotation"},{"id":"5e8f974a-2516-470c-bb86-f670da342994","type":"GlyphRenderer"},{"id":"aae8e394-6f34-403e-9fbf-937bf4375637","type":"GlyphRenderer"},{"id":"32b0e0db-9ac0-4258-a18a-946a3b0100a4","type":"GlyphRenderer"}],"title":{"id":"69514f7f-f21a-4d90-a236-187efae35ce6","type":"Title"},"tool_events":{"id":"f4986966-448f-49b1-bdd2-253ee151a672","type":"ToolEvents"},"toolbar":{"id":"6d81c7be-3dfe-4618-8121-46a40f14796b","type":"Toolbar"},"x_range":{"id":"a9dfa6a7-5587-43c4-aadf-8f5002eafd3a","type":"DataRange1d"},"y_range":{"id":"1cd94c01-0a3a-4961-a1c8-fcb0492ad081","type":"DataRange1d"}},"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"4f9a1639-8885-483d-845e-aeb68b435533","type":"AdaptiveTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"611641dd-5979-424d-bea5-7bd837d84be3","type":"DaysTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"2052d650-1852-4fc1-aeec-05346b189143","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"4c9d3234-81a9-4d73-af44-488235238327","type":"ColumnDataSource"},"glyph":{"id":"70f356cf-ec9b-4d73-a79f-5774343d6272","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"f22577c0-b47f-4832-8fd4-375530738a33","type":"Segment"},"selection_glyph":null},"id":"5e8f974a-2516-470c-bb86-f670da342994","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"219dcf54-5f78-45d7-93f8-7f131742fcaa","type":"ColumnDataSource"},"glyph":{"id":"3e3e27dc-903c-45f7-a946-1dd4af1346d4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"6133f395-400a-40d1-b5b1-760863bbc75a","type":"Rect"},"selection_glyph":null},"id":"aae8e394-6f34-403e-9fbf-937bf4375637","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1f6e45c1-1a4e-45ee-9136-0ae23222c2e1","type":"ColumnDataSource"},"glyph":{"id":"bf009bcc-5812-4b3a-94ef-c8ebab7a5687","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"bc108300-f920-4e7d-bd91-cdb613258161","type":"Rect"},"selection_glyph":null},"id":"32b0e0db-9ac0-4258-a18a-946a3b0100a4","type":"GlyphRenderer"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"82188be4-999e-40d6-86be-d1f533e65687","type":"AdaptiveTicker"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"70f356cf-ec9b-4d73-a79f-5774343d6272","type":"Segment"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bdc1c38-3b80-4c4f-8f91-eb084f38af5d","type":"BasicTicker"}},"id":"531d71c3-77da-44dd-8e78-58078f3fd133","type":"Grid"},{"attributes":{"plot":{"id":"fa2e7206-c336-4316-88a9-0096555717fa","subtype":"Figure","type":"Plot"}},"id":"f11c0173-320b-4e1c-bda1-623de1bb6600","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3681f369-7cd1-4fbf-b748-c42d608774f7","type":"PanTool"},{"id":"f11c0173-320b-4e1c-bda1-623de1bb6600","type":"WheelZoomTool"},{"id":"ab3e3fd9-4929-4ae6-8873-1f3780bbfee8","type":"BoxZoomTool"},{"id":"62ba43ad-cd66-431e-907a-74141b1be2a6","type":"ResetTool"},{"id":"fe62fe6b-a3a0-45c9-92ec-6f1867337310","type":"SaveTool"}]},"id":"6d81c7be-3dfe-4618-8121-46a40f14796b","type":"Toolbar"}],"root_ids":["fa2e7206-c336-4316-88a9-0096555717fa"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"fe44e8da-cda7-4fe6-a4ad-c2b159da3142","elementid":"67843102-02a2-4b11-b78c-a621cc09891f","modelid":"fa2e7206-c336-4316-88a9-0096555717fa"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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