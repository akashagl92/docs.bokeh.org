(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("87662ef4-c92e-44d4-9b1f-f20ca66f7d1b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87662ef4-c92e-44d4-9b1f-f20ca66f7d1b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"fe2cefb9-f716-4dc3-8366-5433573e1303":{"roots":{"references":[{"attributes":{},"id":"6690ca06-ea91-4ffa-a78d-b584a3d64e21","type":"ToolEvents"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d1eaccf-cb7c-4afe-a2ae-de9f110f75d8","type":"Ray"},{"attributes":{"dimension":1,"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3635b18-75a3-45bc-933e-0da45c2ccc04","type":"BasicTicker"}},"id":"944357bb-bbb9-4342-b54e-9a341c5f235d","type":"Grid"},{"attributes":{"overlay":{"id":"80478295-4777-47e0-9f63-46e8f1e59b01","type":"BoxAnnotation"},"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"}},"id":"c89acdc7-50da-4d6f-a73f-a874411337c2","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"}},"id":"a83d9065-47da-49fa-938a-cde841643f7c","type":"ResetTool"},{"attributes":{},"id":"c0fb5d75-bae2-4676-906a-64e8384e9f98","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"90970abd-6dc8-4230-858e-5bb3974a2a13","type":"DataRange1d"},{"attributes":{"below":[{"id":"2f708660-27a6-4a32-bc0b-69f2c01611f1","type":"LinearAxis"}],"left":[{"id":"e259c445-930e-4824-9329-83a7091184c3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2f708660-27a6-4a32-bc0b-69f2c01611f1","type":"LinearAxis"},{"id":"10ab3152-f2fb-4bbf-bd08-d86cecf9929d","type":"Grid"},{"id":"e259c445-930e-4824-9329-83a7091184c3","type":"LinearAxis"},{"id":"944357bb-bbb9-4342-b54e-9a341c5f235d","type":"Grid"},{"id":"80478295-4777-47e0-9f63-46e8f1e59b01","type":"BoxAnnotation"},{"id":"bdfa1a01-4f0b-4753-9abe-4fafd18cb929","type":"GlyphRenderer"}],"title":{"id":"e78a883f-be07-46c2-b946-6b5713fa0480","type":"Title"},"tool_events":{"id":"6690ca06-ea91-4ffa-a78d-b584a3d64e21","type":"ToolEvents"},"toolbar":{"id":"27c9dbc5-6078-4705-9bc6-8b7cd3207b54","type":"Toolbar"},"x_range":{"id":"90970abd-6dc8-4230-858e-5bb3974a2a13","type":"DataRange1d"},"y_range":{"id":"c207c45d-fe69-4ac3-ae89-bc42ff2e953a","type":"DataRange1d"}},"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","angle","y"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"498c7c96-b8a1-44c2-9398-9309553d00d6","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"e78a883f-be07-46c2-b946-6b5713fa0480","type":"Title"},{"attributes":{"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"}},"id":"4ec8657b-1942-4d88-821b-b8f203bdd451","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a70fcbd8-5c46-4d3d-9c6d-67ef11009a40","type":"PanTool"},{"id":"4ec8657b-1942-4d88-821b-b8f203bdd451","type":"WheelZoomTool"},{"id":"c89acdc7-50da-4d6f-a73f-a874411337c2","type":"BoxZoomTool"},{"id":"af52c727-6bae-435c-8de6-39f63f550c75","type":"SaveTool"},{"id":"a83d9065-47da-49fa-938a-cde841643f7c","type":"ResetTool"},{"id":"d210d2a0-990c-4d6d-a7f6-b119babee43b","type":"HelpTool"}]},"id":"27c9dbc5-6078-4705-9bc6-8b7cd3207b54","type":"Toolbar"},{"attributes":{"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a364357-95ab-4743-9664-7f750ac8a76f","type":"BasicTicker"}},"id":"10ab3152-f2fb-4bbf-bd08-d86cecf9929d","type":"Grid"},{"attributes":{},"id":"8a364357-95ab-4743-9664-7f750ac8a76f","type":"BasicTicker"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f82217b1-9b47-4c1e-b83a-4cc12c7f43aa","type":"Ray"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80478295-4777-47e0-9f63-46e8f1e59b01","type":"BoxAnnotation"},{"attributes":{},"id":"071a2dc0-c698-4ef9-bf15-fc735efd00c4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c207c45d-fe69-4ac3-ae89-bc42ff2e953a","type":"DataRange1d"},{"attributes":{"formatter":{"id":"071a2dc0-c698-4ef9-bf15-fc735efd00c4","type":"BasicTickFormatter"},"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3635b18-75a3-45bc-933e-0da45c2ccc04","type":"BasicTicker"}},"id":"e259c445-930e-4824-9329-83a7091184c3","type":"LinearAxis"},{"attributes":{"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"}},"id":"a70fcbd8-5c46-4d3d-9c6d-67ef11009a40","type":"PanTool"},{"attributes":{"data_source":{"id":"498c7c96-b8a1-44c2-9398-9309553d00d6","type":"ColumnDataSource"},"glyph":{"id":"0d1eaccf-cb7c-4afe-a2ae-de9f110f75d8","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"f82217b1-9b47-4c1e-b83a-4cc12c7f43aa","type":"Ray"},"selection_glyph":null},"id":"bdfa1a01-4f0b-4753-9abe-4fafd18cb929","type":"GlyphRenderer"},{"attributes":{},"id":"d3635b18-75a3-45bc-933e-0da45c2ccc04","type":"BasicTicker"},{"attributes":{"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"}},"id":"af52c727-6bae-435c-8de6-39f63f550c75","type":"SaveTool"},{"attributes":{"formatter":{"id":"c0fb5d75-bae2-4676-906a-64e8384e9f98","type":"BasicTickFormatter"},"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a364357-95ab-4743-9664-7f750ac8a76f","type":"BasicTicker"}},"id":"2f708660-27a6-4a32-bc0b-69f2c01611f1","type":"LinearAxis"},{"attributes":{"plot":{"id":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69","subtype":"Figure","type":"Plot"}},"id":"d210d2a0-990c-4d6d-a7f6-b119babee43b","type":"HelpTool"}],"root_ids":["e1ec731a-bb4e-4497-9c24-c1181a0bfa69"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"fe2cefb9-f716-4dc3-8366-5433573e1303","elementid":"87662ef4-c92e-44d4-9b1f-f20ca66f7d1b","modelid":"e1ec731a-bb4e-4497-9c24-c1181a0bfa69"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
