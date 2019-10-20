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
      };var element = document.getElementById("0c6c0a84-1c9e-4247-b13c-176c93995722");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c6c0a84-1c9e-4247-b13c-176c93995722' but no matching script tag was found. ")
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
                var docs_json = {"5f727e06-5dfa-44d1-bb82-3f1e3fb235ed":{"roots":{"references":[{"attributes":{},"id":"8a80f80e-4400-4826-ac6b-1976a6c41a03","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"}},"id":"7faa29f2-1645-4c55-ab94-ac2799aae91c","type":"HelpTool"},{"attributes":{"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"}},"id":"7aa96e26-69e8-44eb-bdaf-af838005935a","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"c4b02673-27e2-4b6b-bc9f-871766e324b7","type":"LinearAxis"}],"left":[{"id":"c7a9e240-99c2-49fb-b3ad-e2ec8c767b02","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c4b02673-27e2-4b6b-bc9f-871766e324b7","type":"LinearAxis"},{"id":"0620c556-26c1-4fb1-bcc7-b8526affba3a","type":"Grid"},{"id":"c7a9e240-99c2-49fb-b3ad-e2ec8c767b02","type":"LinearAxis"},{"id":"06eb78f3-9288-4b15-a47f-f905130e76f9","type":"Grid"},{"id":"3feb935a-8943-419b-878e-9d1af0552bdc","type":"BoxAnnotation"},{"id":"eecc3a1d-488e-4cb0-9e06-2562f4a89b84","type":"GlyphRenderer"}],"title":{"id":"57a442df-e7c0-4fe1-995c-b7b010283a89","type":"Title"},"tool_events":{"id":"0e8140da-0657-4e34-88fc-840e866244dd","type":"ToolEvents"},"toolbar":{"id":"c8675630-5375-4ba2-bde2-6bd5ee0d201b","type":"Toolbar"},"x_range":{"id":"ecdc48dc-9277-4428-9acb-ab9ef749d0d8","type":"DataRange1d"},"y_range":{"id":"8b809193-f620-4cd8-9d6b-5fb7f231d907","type":"DataRange1d"}},"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"57a442df-e7c0-4fe1-995c-b7b010283a89","type":"Title"},{"attributes":{},"id":"4a8c7064-9dd4-457e-9f63-2f1930edcd9d","type":"BasicTicker"},{"attributes":{"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"}},"id":"3130a0f6-ae95-443d-9c89-c8df5b974552","type":"PanTool"},{"attributes":{},"id":"1647c433-222a-4e87-8e49-8d6f26e3ce2c","type":"BasicTicker"},{"attributes":{},"id":"76d127c7-8b2d-423f-b17d-ac2bec851938","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6b37987-76e4-408e-9c53-590a0cafbabc","type":"Patch"},{"attributes":{},"id":"0e8140da-0657-4e34-88fc-840e866244dd","type":"ToolEvents"},{"attributes":{"callback":null},"id":"ecdc48dc-9277-4428-9acb-ab9ef749d0d8","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe8da84e-7ee0-4676-ad71-74220b25c307","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3feb935a-8943-419b-878e-9d1af0552bdc","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"}},"id":"fb54c011-8ad9-4bdb-a06c-7f467ea82e50","type":"ResetTool"},{"attributes":{"callback":null},"id":"8b809193-f620-4cd8-9d6b-5fb7f231d907","type":"DataRange1d"},{"attributes":{"formatter":{"id":"8a80f80e-4400-4826-ac6b-1976a6c41a03","type":"BasicTickFormatter"},"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a8c7064-9dd4-457e-9f63-2f1930edcd9d","type":"BasicTicker"}},"id":"c4b02673-27e2-4b6b-bc9f-871766e324b7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3096cfd3-87b2-4d10-a791-5a03ad1eee31","type":"ColumnDataSource"},"glyph":{"id":"a6b37987-76e4-408e-9c53-590a0cafbabc","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"fe8da84e-7ee0-4676-ad71-74220b25c307","type":"Patch"},"selection_glyph":null},"id":"eecc3a1d-488e-4cb0-9e06-2562f4a89b84","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3feb935a-8943-419b-878e-9d1af0552bdc","type":"BoxAnnotation"},"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"}},"id":"44ed067a-3720-489a-912d-47d157494bdb","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3130a0f6-ae95-443d-9c89-c8df5b974552","type":"PanTool"},{"id":"7aa96e26-69e8-44eb-bdaf-af838005935a","type":"WheelZoomTool"},{"id":"44ed067a-3720-489a-912d-47d157494bdb","type":"BoxZoomTool"},{"id":"2e0fc6e6-a0b3-4db1-9a99-2f120379473d","type":"SaveTool"},{"id":"fb54c011-8ad9-4bdb-a06c-7f467ea82e50","type":"ResetTool"},{"id":"7faa29f2-1645-4c55-ab94-ac2799aae91c","type":"HelpTool"}]},"id":"c8675630-5375-4ba2-bde2-6bd5ee0d201b","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"},"ticker":{"id":"1647c433-222a-4e87-8e49-8d6f26e3ce2c","type":"BasicTicker"}},"id":"06eb78f3-9288-4b15-a47f-f905130e76f9","type":"Grid"},{"attributes":{"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"}},"id":"2e0fc6e6-a0b3-4db1-9a99-2f120379473d","type":"SaveTool"},{"attributes":{"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a8c7064-9dd4-457e-9f63-2f1930edcd9d","type":"BasicTicker"}},"id":"0620c556-26c1-4fb1-bcc7-b8526affba3a","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"3096cfd3-87b2-4d10-a791-5a03ad1eee31","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"76d127c7-8b2d-423f-b17d-ac2bec851938","type":"BasicTickFormatter"},"plot":{"id":"31871c0e-ed28-4e87-b732-fbda907fb726","subtype":"Figure","type":"Plot"},"ticker":{"id":"1647c433-222a-4e87-8e49-8d6f26e3ce2c","type":"BasicTicker"}},"id":"c7a9e240-99c2-49fb-b3ad-e2ec8c767b02","type":"LinearAxis"}],"root_ids":["31871c0e-ed28-4e87-b732-fbda907fb726"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"5f727e06-5dfa-44d1-bb82-3f1e3fb235ed","elementid":"0c6c0a84-1c9e-4247-b13c-176c93995722","modelid":"31871c0e-ed28-4e87-b732-fbda907fb726"}];
                
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
