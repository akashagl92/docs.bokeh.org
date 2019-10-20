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
      };var element = document.getElementById("a810b4c9-5957-47ad-9f5e-45e5980790cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a810b4c9-5957-47ad-9f5e-45e5980790cb' but no matching script tag was found. ")
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
                var docs_json = {"3824639e-147e-424d-9b9b-9db459e7185a":{"roots":{"references":[{"attributes":{"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"}},"id":"a2e4573c-3aa3-41a4-ae31-e011464dca31","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b340b148-a85b-4823-941c-c73a515c6b0b","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"},"ticker":{"id":"11236deb-45f3-467e-9286-dbff7525dbb9","type":"BasicTicker"}},"id":"5f2eea4f-764a-4a01-8f32-b2096a0344b7","type":"Grid"},{"attributes":{},"id":"11236deb-45f3-467e-9286-dbff7525dbb9","type":"BasicTicker"},{"attributes":{},"id":"0ebee852-b002-431a-b499-361dfef399e7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"}},"id":"e6b687d7-a1b7-4300-843e-8a02fd59bbd8","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b1e08774-33e3-4571-9a34-13c99fb4da3e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"}},"id":"a3e86956-b600-488b-935c-79e28aeec058","type":"SaveTool"},{"attributes":{"callback":null},"id":"0b705c04-9e27-442c-bdc2-480c086025bd","type":"DataRange1d"},{"attributes":{"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"},"ticker":{"id":"20866315-c2bd-448c-92b0-8de205d358e2","type":"BasicTicker"}},"id":"890517ca-7c4e-4d02-8a96-9d8c8428ffe7","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ffb1efe8-7a90-4eb8-be34-938fa0ffae8f","type":"PanTool"},{"id":"5d6ea5c4-1f2e-4bc5-bf8e-5a299f129055","type":"WheelZoomTool"},{"id":"582576a1-a5a6-4204-864e-9e40cb8d15fd","type":"BoxZoomTool"},{"id":"a3e86956-b600-488b-935c-79e28aeec058","type":"SaveTool"},{"id":"a2e4573c-3aa3-41a4-ae31-e011464dca31","type":"ResetTool"},{"id":"e6b687d7-a1b7-4300-843e-8a02fd59bbd8","type":"HelpTool"}]},"id":"aa888e96-6a7c-483b-ac2a-971928b2aa99","type":"Toolbar"},{"attributes":{"formatter":{"id":"0ebee852-b002-431a-b499-361dfef399e7","type":"BasicTickFormatter"},"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"},"ticker":{"id":"11236deb-45f3-467e-9286-dbff7525dbb9","type":"BasicTicker"}},"id":"267640b4-ea84-465a-a057-af4f7c80b900","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"498b8fad-d7c8-4210-b1ba-97d2a758f3b1","type":"Title"},{"attributes":{},"id":"20866315-c2bd-448c-92b0-8de205d358e2","type":"BasicTicker"},{"attributes":{"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"}},"id":"ffb1efe8-7a90-4eb8-be34-938fa0ffae8f","type":"PanTool"},{"attributes":{"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"}},"id":"5d6ea5c4-1f2e-4bc5-bf8e-5a299f129055","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5611a87f-a6cb-44b8-ae2f-cdc44c3f4ff3","type":"CircleX"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3792c9c-0117-4afe-9e0f-a171bebf2846","type":"CircleX"},{"attributes":{"below":[{"id":"508322e3-377f-472c-9662-af4f05367196","type":"LinearAxis"}],"left":[{"id":"267640b4-ea84-465a-a057-af4f7c80b900","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"508322e3-377f-472c-9662-af4f05367196","type":"LinearAxis"},{"id":"890517ca-7c4e-4d02-8a96-9d8c8428ffe7","type":"Grid"},{"id":"267640b4-ea84-465a-a057-af4f7c80b900","type":"LinearAxis"},{"id":"5f2eea4f-764a-4a01-8f32-b2096a0344b7","type":"Grid"},{"id":"b1e08774-33e3-4571-9a34-13c99fb4da3e","type":"BoxAnnotation"},{"id":"f9b091f3-7394-4416-9e5e-85f20fb422ec","type":"GlyphRenderer"}],"title":{"id":"498b8fad-d7c8-4210-b1ba-97d2a758f3b1","type":"Title"},"tool_events":{"id":"138163ab-dc2c-42c7-bb92-369f7ba26dc4","type":"ToolEvents"},"toolbar":{"id":"aa888e96-6a7c-483b-ac2a-971928b2aa99","type":"Toolbar"},"x_range":{"id":"eee9e918-efc4-4bad-9796-83ee7dcbdd43","type":"DataRange1d"},"y_range":{"id":"0b705c04-9e27-442c-bdc2-480c086025bd","type":"DataRange1d"}},"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"b1e08774-33e3-4571-9a34-13c99fb4da3e","type":"BoxAnnotation"},"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"}},"id":"582576a1-a5a6-4204-864e-9e40cb8d15fd","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"b340b148-a85b-4823-941c-c73a515c6b0b","type":"ColumnDataSource"},"glyph":{"id":"5611a87f-a6cb-44b8-ae2f-cdc44c3f4ff3","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"c3792c9c-0117-4afe-9e0f-a171bebf2846","type":"CircleX"},"selection_glyph":null},"id":"f9b091f3-7394-4416-9e5e-85f20fb422ec","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"eee9e918-efc4-4bad-9796-83ee7dcbdd43","type":"DataRange1d"},{"attributes":{},"id":"138163ab-dc2c-42c7-bb92-369f7ba26dc4","type":"ToolEvents"},{"attributes":{},"id":"680e66d0-574f-448f-9a00-9dc1afa64b2a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"680e66d0-574f-448f-9a00-9dc1afa64b2a","type":"BasicTickFormatter"},"plot":{"id":"9a8df100-83be-4225-a644-251dafe1c065","subtype":"Figure","type":"Plot"},"ticker":{"id":"20866315-c2bd-448c-92b0-8de205d358e2","type":"BasicTicker"}},"id":"508322e3-377f-472c-9662-af4f05367196","type":"LinearAxis"}],"root_ids":["9a8df100-83be-4225-a644-251dafe1c065"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"3824639e-147e-424d-9b9b-9db459e7185a","elementid":"a810b4c9-5957-47ad-9f5e-45e5980790cb","modelid":"9a8df100-83be-4225-a644-251dafe1c065"}];
                
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
