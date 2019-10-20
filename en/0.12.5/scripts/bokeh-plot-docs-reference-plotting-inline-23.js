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
      };var element = document.getElementById("fcb03376-f268-41a7-9bd1-c1d0a1e24ea2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fcb03376-f268-41a7-9bd1-c1d0a1e24ea2' but no matching script tag was found. ")
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
                var docs_json = {"76e1a00d-fa7f-447d-83f7-f13ed2052f95":{"roots":{"references":[{"attributes":{"overlay":{"id":"9ee7879b-494d-4464-8d9e-ce6c9861e108","type":"BoxAnnotation"},"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"}},"id":"6e5bb080-fb65-4ec4-8d34-43df175711d0","type":"BoxZoomTool"},{"attributes":{},"id":"64564f13-6251-4604-af4a-67c882a6583c","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"},"ticker":{"id":"71b7109c-99f1-4f32-a9d2-4b448f5fc487","type":"BasicTicker"}},"id":"e6263202-8da1-4976-8eb0-db221b2733ee","type":"Grid"},{"attributes":{"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"}},"id":"b4aad65a-29ce-4645-8b2c-e8b3862c2b8e","type":"ResetTool"},{"attributes":{"formatter":{"id":"161c589b-f0f6-434e-98c2-83885c54061c","type":"BasicTickFormatter"},"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"},"ticker":{"id":"64564f13-6251-4604-af4a-67c882a6583c","type":"BasicTicker"}},"id":"edfae1c0-5129-41e9-a21a-4debaa1ab98c","type":"LinearAxis"},{"attributes":{"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"}},"id":"6754d873-22ca-4c0d-8065-dc2748e9c246","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b0f3e69e-8672-455c-b336-55f2c1cfa874","type":"PanTool"},{"id":"6754d873-22ca-4c0d-8065-dc2748e9c246","type":"WheelZoomTool"},{"id":"6e5bb080-fb65-4ec4-8d34-43df175711d0","type":"BoxZoomTool"},{"id":"0789d05f-c7cc-4101-8d33-e24c5e68ec8f","type":"SaveTool"},{"id":"b4aad65a-29ce-4645-8b2c-e8b3862c2b8e","type":"ResetTool"},{"id":"134bb329-6d8a-42b9-a58a-de031e99f0cc","type":"HelpTool"}]},"id":"dab82de4-640a-446c-910c-5a99230f254e","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c112427-17f1-43d3-b4d9-710d343bf565","type":"Triangle"},{"attributes":{"callback":null},"id":"d4e1fe4b-b3b6-4f3b-9900-71009c087014","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b88d2669-98ca-4f73-9290-9e1d3529743f","type":"ColumnDataSource"},"glyph":{"id":"5c112427-17f1-43d3-b4d9-710d343bf565","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb6711ba-4ebf-4e15-9150-c367b88ec723","type":"Triangle"},"selection_glyph":null},"id":"431d4196-4728-4724-a644-1123361205b0","type":"GlyphRenderer"},{"attributes":{},"id":"71b7109c-99f1-4f32-a9d2-4b448f5fc487","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ee7879b-494d-4464-8d9e-ce6c9861e108","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"}},"id":"b0f3e69e-8672-455c-b336-55f2c1cfa874","type":"PanTool"},{"attributes":{"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"}},"id":"0789d05f-c7cc-4101-8d33-e24c5e68ec8f","type":"SaveTool"},{"attributes":{"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"},"ticker":{"id":"64564f13-6251-4604-af4a-67c882a6583c","type":"BasicTicker"}},"id":"46e4177f-842b-42e2-92bc-f90f98352daf","type":"Grid"},{"attributes":{"formatter":{"id":"1114d7b9-68a3-4ccb-b6f6-cfb5e7d47345","type":"BasicTickFormatter"},"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"},"ticker":{"id":"71b7109c-99f1-4f32-a9d2-4b448f5fc487","type":"BasicTicker"}},"id":"b1db2be0-78a8-4708-a6df-f641a63cad90","type":"LinearAxis"},{"attributes":{},"id":"161c589b-f0f6-434e-98c2-83885c54061c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b795c6cf-a718-4348-8800-db7b2c6a73d0","type":"DataRange1d"},{"attributes":{},"id":"94ce664f-60b8-40c1-84bc-b2464720ab43","type":"ToolEvents"},{"attributes":{"plot":{"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"}},"id":"134bb329-6d8a-42b9-a58a-de031e99f0cc","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"e426dca5-0c3b-44dc-bdda-1460cf9fe5f2","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb6711ba-4ebf-4e15-9150-c367b88ec723","type":"Triangle"},{"attributes":{"callback":null,"column_names":["size","x","y"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"b88d2669-98ca-4f73-9290-9e1d3529743f","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"edfae1c0-5129-41e9-a21a-4debaa1ab98c","type":"LinearAxis"}],"left":[{"id":"b1db2be0-78a8-4708-a6df-f641a63cad90","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"edfae1c0-5129-41e9-a21a-4debaa1ab98c","type":"LinearAxis"},{"id":"46e4177f-842b-42e2-92bc-f90f98352daf","type":"Grid"},{"id":"b1db2be0-78a8-4708-a6df-f641a63cad90","type":"LinearAxis"},{"id":"e6263202-8da1-4976-8eb0-db221b2733ee","type":"Grid"},{"id":"9ee7879b-494d-4464-8d9e-ce6c9861e108","type":"BoxAnnotation"},{"id":"431d4196-4728-4724-a644-1123361205b0","type":"GlyphRenderer"}],"title":{"id":"e426dca5-0c3b-44dc-bdda-1460cf9fe5f2","type":"Title"},"tool_events":{"id":"94ce664f-60b8-40c1-84bc-b2464720ab43","type":"ToolEvents"},"toolbar":{"id":"dab82de4-640a-446c-910c-5a99230f254e","type":"Toolbar"},"x_range":{"id":"b795c6cf-a718-4348-8800-db7b2c6a73d0","type":"DataRange1d"},"y_range":{"id":"d4e1fe4b-b3b6-4f3b-9900-71009c087014","type":"DataRange1d"}},"id":"97b11435-5dad-4233-babb-b3591dfcf57a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1114d7b9-68a3-4ccb-b6f6-cfb5e7d47345","type":"BasicTickFormatter"}],"root_ids":["97b11435-5dad-4233-babb-b3591dfcf57a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"76e1a00d-fa7f-447d-83f7-f13ed2052f95","elementid":"fcb03376-f268-41a7-9bd1-c1d0a1e24ea2","modelid":"97b11435-5dad-4233-babb-b3591dfcf57a"}];
                
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
