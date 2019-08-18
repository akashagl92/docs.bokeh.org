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
      };var element = document.getElementById("83c17d08-b53f-4132-944d-1844edbdb75d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '83c17d08-b53f-4132-944d-1844edbdb75d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ae82b456-2c21-4e82-bdfe-d714a04bd896":{"roots":{"references":[{"attributes":{"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"}},"id":"79f91a07-4c40-46a6-ba0f-53998884f7f3","type":"HelpTool"},{"attributes":{},"id":"7d9d2232-d68f-48d6-b52f-cbf4b4cece14","type":"BasicTicker"},{"attributes":{"below":[{"id":"a796b43c-b902-4c2b-b7e5-094ee06fc3c9","type":"LinearAxis"}],"left":[{"id":"0e27fdb0-8c03-4613-8f13-ccc6586c19d3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a796b43c-b902-4c2b-b7e5-094ee06fc3c9","type":"LinearAxis"},{"id":"5bc5287e-c65a-4339-a87e-25f4fbd03b3f","type":"Grid"},{"id":"0e27fdb0-8c03-4613-8f13-ccc6586c19d3","type":"LinearAxis"},{"id":"ce3e5312-ffe8-44e6-8208-90333d3cd47b","type":"Grid"},{"id":"196ad8ab-b9c7-4b23-9db5-1f5e1b6b3dc5","type":"BoxAnnotation"},{"id":"f5d88392-7edf-4a06-b4eb-181284a12280","type":"GlyphRenderer"}],"title":{"id":"9432f540-d109-4cf4-88a5-c3a4cfc59233","type":"Title"},"tool_events":{"id":"15863cb3-9515-4254-827f-8d25f3db0f3f","type":"ToolEvents"},"toolbar":{"id":"13875465-7011-47c0-af08-d59eddfbc60f","type":"Toolbar"},"x_range":{"id":"22f2fb00-68f8-4e11-8785-b9bd696db8b6","type":"DataRange1d"},"y_range":{"id":"093589f5-c0c2-4d54-b017-952298ee746e","type":"DataRange1d"}},"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6697843b-3b20-441a-9186-b71372587fbe","type":"PanTool"},{"id":"507dca81-9116-4007-80dd-27aeacc91a4f","type":"WheelZoomTool"},{"id":"f837dc18-7b9e-42ca-bb3a-79394d6b38d8","type":"BoxZoomTool"},{"id":"f0e9fed6-5747-4670-a29f-294d505fb2d5","type":"SaveTool"},{"id":"364f6abf-aa03-4344-8883-578c50e3f856","type":"ResetTool"},{"id":"79f91a07-4c40-46a6-ba0f-53998884f7f3","type":"HelpTool"}]},"id":"13875465-7011-47c0-af08-d59eddfbc60f","type":"Toolbar"},{"attributes":{"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"}},"id":"507dca81-9116-4007-80dd-27aeacc91a4f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"}},"id":"6697843b-3b20-441a-9186-b71372587fbe","type":"PanTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16c82928-aff7-4797-adc8-b188f37be257","type":"Rect"},{"attributes":{"formatter":{"id":"8907d9b5-aac3-4c53-a697-07969a87e87b","type":"BasicTickFormatter"},"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d9d2232-d68f-48d6-b52f-cbf4b4cece14","type":"BasicTicker"}},"id":"a796b43c-b902-4c2b-b7e5-094ee06fc3c9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"8f6b98a2-15bd-48b5-8537-947339078818","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"9432f540-d109-4cf4-88a5-c3a4cfc59233","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"196ad8ab-b9c7-4b23-9db5-1f5e1b6b3dc5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"8f6b98a2-15bd-48b5-8537-947339078818","type":"ColumnDataSource"},"glyph":{"id":"16c82928-aff7-4797-adc8-b188f37be257","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"6824aca6-625b-47ae-8d03-018a188e7ead","type":"Rect"},"selection_glyph":null},"id":"f5d88392-7edf-4a06-b4eb-181284a12280","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6824aca6-625b-47ae-8d03-018a188e7ead","type":"Rect"},{"attributes":{"overlay":{"id":"196ad8ab-b9c7-4b23-9db5-1f5e1b6b3dc5","type":"BoxAnnotation"},"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"}},"id":"f837dc18-7b9e-42ca-bb3a-79394d6b38d8","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"22f2fb00-68f8-4e11-8785-b9bd696db8b6","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"a220b551-f14f-4546-b6ab-390ab20c5b09","type":"BasicTicker"}},"id":"ce3e5312-ffe8-44e6-8208-90333d3cd47b","type":"Grid"},{"attributes":{},"id":"8907d9b5-aac3-4c53-a697-07969a87e87b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d9d2232-d68f-48d6-b52f-cbf4b4cece14","type":"BasicTicker"}},"id":"5bc5287e-c65a-4339-a87e-25f4fbd03b3f","type":"Grid"},{"attributes":{},"id":"a220b551-f14f-4546-b6ab-390ab20c5b09","type":"BasicTicker"},{"attributes":{"callback":null},"id":"093589f5-c0c2-4d54-b017-952298ee746e","type":"DataRange1d"},{"attributes":{},"id":"15863cb3-9515-4254-827f-8d25f3db0f3f","type":"ToolEvents"},{"attributes":{"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"}},"id":"f0e9fed6-5747-4670-a29f-294d505fb2d5","type":"SaveTool"},{"attributes":{"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"}},"id":"364f6abf-aa03-4344-8883-578c50e3f856","type":"ResetTool"},{"attributes":{},"id":"8fae9116-cca1-4b4a-9b82-4d9ff50d45cc","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8fae9116-cca1-4b4a-9b82-4d9ff50d45cc","type":"BasicTickFormatter"},"plot":{"id":"dc503ad3-ef67-4b2f-ace7-4067044d05a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"a220b551-f14f-4546-b6ab-390ab20c5b09","type":"BasicTicker"}},"id":"0e27fdb0-8c03-4613-8f13-ccc6586c19d3","type":"LinearAxis"}],"root_ids":["dc503ad3-ef67-4b2f-ace7-4067044d05a5"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"ae82b456-2c21-4e82-bdfe-d714a04bd896","elementid":"83c17d08-b53f-4132-944d-1844edbdb75d","modelid":"dc503ad3-ef67-4b2f-ace7-4067044d05a5"}];
              
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