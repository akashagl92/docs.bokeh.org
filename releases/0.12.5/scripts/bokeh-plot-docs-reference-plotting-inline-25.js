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
      };var element = document.getElementById("dca9ca76-7332-45ba-9602-1f55431ab34a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dca9ca76-7332-45ba-9602-1f55431ab34a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"6cc9d0d9-0be8-4fc8-8a33-80c8f93a1a56":{"roots":{"references":[{"attributes":{"formatter":{"id":"0744e2ce-026f-42d7-a1df-a18b28fa6298","type":"BasicTickFormatter"},"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"},"ticker":{"id":"167d041f-df07-47c9-bc1c-9a6c4eb7da85","type":"BasicTicker"}},"id":"6a6a3cdb-8c09-41f9-bb01-8486e528f6da","type":"LinearAxis"},{"attributes":{},"id":"167d041f-df07-47c9-bc1c-9a6c4eb7da85","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7429e66-b8d0-41e4-8563-7562e7bcc7b7","type":"Wedge"},{"attributes":{"callback":null},"id":"248e007b-f80f-488a-96ff-eefb5cba6350","type":"DataRange1d"},{"attributes":{"below":[{"id":"c3c98305-bc28-452c-a2b5-c000ceab48fd","type":"LinearAxis"}],"left":[{"id":"6a6a3cdb-8c09-41f9-bb01-8486e528f6da","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c3c98305-bc28-452c-a2b5-c000ceab48fd","type":"LinearAxis"},{"id":"5cac5f94-875c-49d1-9d31-39162360b737","type":"Grid"},{"id":"6a6a3cdb-8c09-41f9-bb01-8486e528f6da","type":"LinearAxis"},{"id":"4c2c41ca-d896-4057-9d43-5d55279f16e1","type":"Grid"},{"id":"6ae59dc3-f171-42f3-a5eb-75455f777dac","type":"BoxAnnotation"},{"id":"83204baa-7d13-453c-a217-a10ea857f605","type":"GlyphRenderer"}],"title":{"id":"c6b26a95-759d-46ee-870b-b1a0fe719c20","type":"Title"},"tool_events":{"id":"a9fad8ea-1eab-4714-a601-c0475e88c626","type":"ToolEvents"},"toolbar":{"id":"dc9563bf-aa5f-4785-a468-7bdba086f24b","type":"Toolbar"},"x_range":{"id":"248e007b-f80f-488a-96ff-eefb5cba6350","type":"DataRange1d"},"y_range":{"id":"dcf9e29b-a918-4ede-9b94-434526dde939","type":"DataRange1d"}},"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4429b718-c400-4c31-8a20-11ea37bc60c0","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"c6b26a95-759d-46ee-870b-b1a0fe719c20","type":"Title"},{"attributes":{"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"}},"id":"17cfde1e-886f-46ae-bc39-d1ca943c9656","type":"PanTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c079807-caad-4921-8fc6-3c4aa311ef19","type":"Wedge"},{"attributes":{},"id":"7d33c8c7-dab2-46b4-9f93-43c1aa1393b3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4429b718-c400-4c31-8a20-11ea37bc60c0","type":"ColumnDataSource"},"glyph":{"id":"5c079807-caad-4921-8fc6-3c4aa311ef19","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7429e66-b8d0-41e4-8563-7562e7bcc7b7","type":"Wedge"},"selection_glyph":null},"id":"83204baa-7d13-453c-a217-a10ea857f605","type":"GlyphRenderer"},{"attributes":{},"id":"a9fad8ea-1eab-4714-a601-c0475e88c626","type":"ToolEvents"},{"attributes":{"callback":null},"id":"dcf9e29b-a918-4ede-9b94-434526dde939","type":"DataRange1d"},{"attributes":{"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"}},"id":"c5c7d775-97c2-489b-8586-5f9130d24185","type":"SaveTool"},{"attributes":{},"id":"0744e2ce-026f-42d7-a1df-a18b28fa6298","type":"BasicTickFormatter"},{"attributes":{},"id":"29ec3a59-45f5-48ec-8094-083d8f2b2177","type":"BasicTicker"},{"attributes":{"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"},"ticker":{"id":"29ec3a59-45f5-48ec-8094-083d8f2b2177","type":"BasicTicker"}},"id":"5cac5f94-875c-49d1-9d31-39162360b737","type":"Grid"},{"attributes":{"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"}},"id":"91bcf818-c102-4c02-a699-654043c61abe","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"}},"id":"6c781dbf-7b0e-4397-bc17-fc261b94d833","type":"ResetTool"},{"attributes":{"overlay":{"id":"6ae59dc3-f171-42f3-a5eb-75455f777dac","type":"BoxAnnotation"},"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"}},"id":"287a1544-8fee-4ef9-8c88-c06e3477b817","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"}},"id":"8acfdaac-42ec-4e26-b265-09c46725e6c6","type":"HelpTool"},{"attributes":{"formatter":{"id":"7d33c8c7-dab2-46b4-9f93-43c1aa1393b3","type":"BasicTickFormatter"},"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"},"ticker":{"id":"29ec3a59-45f5-48ec-8094-083d8f2b2177","type":"BasicTicker"}},"id":"c3c98305-bc28-452c-a2b5-c000ceab48fd","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"6683c273-d112-4d5a-abd1-bfd3a74fd587","subtype":"Figure","type":"Plot"},"ticker":{"id":"167d041f-df07-47c9-bc1c-9a6c4eb7da85","type":"BasicTicker"}},"id":"4c2c41ca-d896-4057-9d43-5d55279f16e1","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"17cfde1e-886f-46ae-bc39-d1ca943c9656","type":"PanTool"},{"id":"91bcf818-c102-4c02-a699-654043c61abe","type":"WheelZoomTool"},{"id":"287a1544-8fee-4ef9-8c88-c06e3477b817","type":"BoxZoomTool"},{"id":"c5c7d775-97c2-489b-8586-5f9130d24185","type":"SaveTool"},{"id":"6c781dbf-7b0e-4397-bc17-fc261b94d833","type":"ResetTool"},{"id":"8acfdaac-42ec-4e26-b265-09c46725e6c6","type":"HelpTool"}]},"id":"dc9563bf-aa5f-4785-a468-7bdba086f24b","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6ae59dc3-f171-42f3-a5eb-75455f777dac","type":"BoxAnnotation"}],"root_ids":["6683c273-d112-4d5a-abd1-bfd3a74fd587"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6cc9d0d9-0be8-4fc8-8a33-80c8f93a1a56","elementid":"dca9ca76-7332-45ba-9602-1f55431ab34a","modelid":"6683c273-d112-4d5a-abd1-bfd3a74fd587"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
