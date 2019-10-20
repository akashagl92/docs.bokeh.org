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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("c59691bf-227c-40ea-bf6f-2429f4339208");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c59691bf-227c-40ea-bf6f-2429f4339208' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"56905c39-f125-40ce-b2f2-26e8d9577d22":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"bba4f862-dc64-4b5e-bb8c-903ed8db8df3","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e975ed47-5c7d-43f7-bb84-4bd4f224de3e","type":"DataRange1d"},{"attributes":{"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"}},"id":"db7392dc-745e-4da0-83d7-1c9126b5492f","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"6c4bbb8b-6ca5-4ba4-a23a-9e566aaecd02","type":"BasicTickFormatter"},"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e25ac75-feeb-49be-ae39-c6a1e53cb3d6","type":"BasicTicker"}},"id":"f4928a48-12c8-40c2-b0ea-d13c13305e06","type":"LinearAxis"},{"attributes":{"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"}},"id":"725c9112-6e6f-4082-868f-89ba1cea8ee0","type":"SaveTool"},{"attributes":{"callback":null},"id":"dec26674-7f55-4809-82db-266e4a58c555","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"b11dc93f-8824-480a-b540-b03fd07921da","type":"Annulus"},{"attributes":{"plot":null,"text":""},"id":"8121f44f-1a06-4654-b91b-64ff1ef7c215","type":"Title"},{"attributes":{"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"}},"id":"216785c9-dc3c-4cb5-a3af-0178682cc94f","type":"PanTool"},{"attributes":{"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"}},"id":"2ad7207e-fe8f-4fa3-aa9f-00afc24cb24c","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e25ac75-feeb-49be-ae39-c6a1e53cb3d6","type":"BasicTicker"}},"id":"ecc1b3e1-fe01-4289-b212-a0d5dc3fa2cf","type":"Grid"},{"attributes":{},"id":"6c4bbb8b-6ca5-4ba4-a23a-9e566aaecd02","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"68c79d8e-6fb8-483d-9607-485ed815467f","type":"Annulus"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"216785c9-dc3c-4cb5-a3af-0178682cc94f","type":"PanTool"},{"id":"db7392dc-745e-4da0-83d7-1c9126b5492f","type":"WheelZoomTool"},{"id":"ff8fcc8a-6a33-4530-837b-ff517b62d4e9","type":"BoxZoomTool"},{"id":"725c9112-6e6f-4082-868f-89ba1cea8ee0","type":"SaveTool"},{"id":"3e249b50-674a-4880-a720-2a2a0d9dc93e","type":"ResetTool"},{"id":"2ad7207e-fe8f-4fa3-aa9f-00afc24cb24c","type":"HelpTool"}]},"id":"eec08831-2fa8-4e5c-8efe-6b49c2a278e0","type":"Toolbar"},{"attributes":{"data_source":{"id":"bba4f862-dc64-4b5e-bb8c-903ed8db8df3","type":"ColumnDataSource"},"glyph":{"id":"b11dc93f-8824-480a-b540-b03fd07921da","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68c79d8e-6fb8-483d-9607-485ed815467f","type":"Annulus"},"selection_glyph":null},"id":"79816749-2601-4f81-928e-80e6ddfd15ef","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"08b84669-8c04-4865-a724-0eaf6baa6fd8","type":"BoxAnnotation"},"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"}},"id":"ff8fcc8a-6a33-4530-837b-ff517b62d4e9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"},"ticker":{"id":"78a523f2-38cd-4ee6-bd81-add2ab6e7420","type":"BasicTicker"}},"id":"3c03bf0c-2b18-4177-a530-6fddac33a208","type":"Grid"},{"attributes":{"formatter":{"id":"51d364fa-8c19-4df1-a67f-423c8fd1599d","type":"BasicTickFormatter"},"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"},"ticker":{"id":"78a523f2-38cd-4ee6-bd81-add2ab6e7420","type":"BasicTicker"}},"id":"fbaaebc1-fa93-4647-8174-8470b63f59bd","type":"LinearAxis"},{"attributes":{},"id":"51d364fa-8c19-4df1-a67f-423c8fd1599d","type":"BasicTickFormatter"},{"attributes":{},"id":"8e25ac75-feeb-49be-ae39-c6a1e53cb3d6","type":"BasicTicker"},{"attributes":{"below":[{"id":"fbaaebc1-fa93-4647-8174-8470b63f59bd","type":"LinearAxis"}],"left":[{"id":"f4928a48-12c8-40c2-b0ea-d13c13305e06","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fbaaebc1-fa93-4647-8174-8470b63f59bd","type":"LinearAxis"},{"id":"3c03bf0c-2b18-4177-a530-6fddac33a208","type":"Grid"},{"id":"f4928a48-12c8-40c2-b0ea-d13c13305e06","type":"LinearAxis"},{"id":"ecc1b3e1-fe01-4289-b212-a0d5dc3fa2cf","type":"Grid"},{"id":"08b84669-8c04-4865-a724-0eaf6baa6fd8","type":"BoxAnnotation"},{"id":"79816749-2601-4f81-928e-80e6ddfd15ef","type":"GlyphRenderer"}],"title":{"id":"8121f44f-1a06-4654-b91b-64ff1ef7c215","type":"Title"},"tool_events":{"id":"b6726c06-8d34-40b4-9c9e-97f0a04e5fa7","type":"ToolEvents"},"toolbar":{"id":"eec08831-2fa8-4e5c-8efe-6b49c2a278e0","type":"Toolbar"},"x_range":{"id":"dec26674-7f55-4809-82db-266e4a58c555","type":"DataRange1d"},"x_scale":{"id":"c68a08ab-f3f9-41d6-a428-4d628717f51b","type":"LinearScale"},"y_range":{"id":"e975ed47-5c7d-43f7-bb84-4bd4f224de3e","type":"DataRange1d"},"y_scale":{"id":"485a88d0-ee79-4238-ba5b-453b855f4150","type":"LinearScale"}},"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"08b84669-8c04-4865-a724-0eaf6baa6fd8","type":"BoxAnnotation"},{"attributes":{},"id":"78a523f2-38cd-4ee6-bd81-add2ab6e7420","type":"BasicTicker"},{"attributes":{},"id":"c68a08ab-f3f9-41d6-a428-4d628717f51b","type":"LinearScale"},{"attributes":{},"id":"b6726c06-8d34-40b4-9c9e-97f0a04e5fa7","type":"ToolEvents"},{"attributes":{"plot":{"id":"624f567d-b3de-4753-82f1-c2748f07225a","subtype":"Figure","type":"Plot"}},"id":"3e249b50-674a-4880-a720-2a2a0d9dc93e","type":"ResetTool"},{"attributes":{},"id":"485a88d0-ee79-4238-ba5b-453b855f4150","type":"LinearScale"}],"root_ids":["624f567d-b3de-4753-82f1-c2748f07225a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"56905c39-f125-40ce-b2f2-26e8d9577d22","elementid":"c59691bf-227c-40ea-bf6f-2429f4339208","modelid":"624f567d-b3de-4753-82f1-c2748f07225a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
