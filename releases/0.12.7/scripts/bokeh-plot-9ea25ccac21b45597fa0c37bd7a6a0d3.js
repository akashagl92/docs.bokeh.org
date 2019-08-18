(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("a064c7d9-33cd-495d-95a4-00b0a6943ea9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a064c7d9-33cd-495d-95a4-00b0a6943ea9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"e550ca07-9f2e-4c10-bbd7-ae407947517d":{"roots":{"references":[{"attributes":{"children":[{"id":"5d3a0255-ac29-49be-98a7-46c8b6bc2482","type":"Row"},{"id":"843f80ff-8368-48d9-937e-4b8021ebce8d","type":"Row"}]},"id":"fcd3714e-5bcc-48f9-8917-342536f42c4d","type":"Column"},{"attributes":{"children":[{"id":"244e11c7-f63b-4324-ab9c-c60e3ddf60fa","type":"Toggle"}]},"id":"c98c1ef4-27e4-4c11-a9b4-d1f41506c705","type":"WidgetBox"},{"attributes":{},"id":"bc092107-1cb1-4558-a94d-bb674cb0782f","type":"LinearScale"},{"attributes":{"formatter":{"id":"fc583b2b-717e-48b3-906b-7eeb5bc13260","type":"BasicTickFormatter"},"plot":{"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"396f108f-7802-4eca-b661-72523e5c4ddc","type":"BasicTicker"}},"id":"586de527-9816-4f46-894d-761ddad1c8c4","type":"LinearAxis"},{"attributes":{"children":[{"id":"4c1dd30e-8289-45c0-a3c6-205239b17ba5","type":"Toggle"}]},"id":"cab3c329-811b-42c7-8911-d7df7eec12ed","type":"WidgetBox"},{"attributes":{},"id":"de492532-ccf9-4da4-8526-cc030155f173","type":"BasicTickFormatter"},{"attributes":{"args":{"object":{"id":"48f36f72-0a68-4ff3-abee-eb07376b4036","type":"GlyphRenderer"},"toggle":{"id":"244e11c7-f63b-4324-ab9c-c60e3ddf60fa","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"e1744f0d-2c4f-47ea-9b56-405c9c21c7b0","type":"CustomJS"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a3f4f69-b1ff-432d-b71f-269048b3569e","type":"Line"},{"attributes":{},"id":"396f108f-7802-4eca-b661-72523e5c4ddc","type":"BasicTicker"},{"attributes":{"button_type":"success","callback":{"id":"b1efbe5a-65f6-4636-9c1a-029e49086192","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"4c1dd30e-8289-45c0-a3c6-205239b17ba5","type":"Toggle"},{"attributes":{"below":[{"id":"baed6ee4-5f58-4266-b134-e49cdcc18959","type":"LinearAxis"}],"left":[{"id":"586de527-9816-4f46-894d-761ddad1c8c4","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"baed6ee4-5f58-4266-b134-e49cdcc18959","type":"LinearAxis"},{"id":"17fe8938-59bb-4d6d-a773-5ae67d3ce078","type":"Grid"},{"id":"586de527-9816-4f46-894d-761ddad1c8c4","type":"LinearAxis"},{"id":"33258e90-9784-42a3-9875-d79c19de2699","type":"Grid"},{"id":"227767fd-dc5e-499a-8ef6-2acca48dcb69","type":"GlyphRenderer"},{"id":"48f36f72-0a68-4ff3-abee-eb07376b4036","type":"GlyphRenderer"},{"id":"621109c7-1966-4e6b-b2c7-bb261cecda1f","type":"BoxAnnotation"}],"title":{"id":"cb658ddb-2bdf-4eb7-a3c7-77501f342c1b","type":"Title"},"toolbar":{"id":"fe11bf73-675b-4828-9b7b-a5b9a91904da","type":"Toolbar"},"x_range":{"id":"f7016efb-c48a-4ce2-a35e-0a75efa242c4","type":"DataRange1d"},"x_scale":{"id":"08267c38-9466-4f7d-870c-b93063f66970","type":"LinearScale"},"y_range":{"id":"6a587fab-2418-49c1-b316-54596a46a7fd","type":"DataRange1d"},"y_scale":{"id":"bc092107-1cb1-4558-a94d-bb674cb0782f","type":"LinearScale"}},"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"object":{"id":"621109c7-1966-4e6b-b2c7-bb261cecda1f","type":"BoxAnnotation"},"toggle":{"id":"4c1dd30e-8289-45c0-a3c6-205239b17ba5","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"b1efbe5a-65f6-4636-9c1a-029e49086192","type":"CustomJS"},{"attributes":{"children":[{"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"}]},"id":"5d3a0255-ac29-49be-98a7-46c8b6bc2482","type":"Row"},{"attributes":{"plot":{"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"603596a8-17a8-4d02-af1a-c27e25577e27","type":"BasicTicker"}},"id":"17fe8938-59bb-4d6d-a773-5ae67d3ce078","type":"Grid"},{"attributes":{"source":{"id":"40a983db-6458-439e-976c-2f801e175db4","type":"ColumnDataSource"}},"id":"0bf0b892-556c-4117-ae92-871b4ce16f61","type":"CDSView"},{"attributes":{"button_type":"success","callback":{"id":"e1744f0d-2c4f-47ea-9b56-405c9c21c7b0","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"244e11c7-f63b-4324-ab9c-c60e3ddf60fa","type":"Toggle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3789a9e9-0549-4cea-94f7-3c1b0009d6d4","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"},"right":2.5},"id":"621109c7-1966-4e6b-b2c7-bb261cecda1f","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"40a983db-6458-439e-976c-2f801e175db4","type":"ColumnDataSource"},"glyph":{"id":"ca66597d-1430-47f6-8537-403e28d89ed5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25aeb78e-b38c-4197-a49d-9cfd8595e5ce","type":"Line"},"selection_glyph":null,"view":{"id":"0bf0b892-556c-4117-ae92-871b4ce16f61","type":"CDSView"}},"id":"227767fd-dc5e-499a-8ef6-2acca48dcb69","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25aeb78e-b38c-4197-a49d-9cfd8595e5ce","type":"Line"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca66597d-1430-47f6-8537-403e28d89ed5","type":"Line"},{"attributes":{"source":{"id":"f5510dd1-27d3-4b24-a67e-a2b6a4cefc87","type":"ColumnDataSource"}},"id":"9c6eaae2-a9fd-4379-9fa0-9759ecdb2413","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fe11bf73-675b-4828-9b7b-a5b9a91904da","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"396f108f-7802-4eca-b661-72523e5c4ddc","type":"BasicTicker"}},"id":"33258e90-9784-42a3-9875-d79c19de2699","type":"Grid"},{"attributes":{},"id":"603596a8-17a8-4d02-af1a-c27e25577e27","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f7016efb-c48a-4ce2-a35e-0a75efa242c4","type":"DataRange1d"},{"attributes":{"children":[{"id":"cab3c329-811b-42c7-8911-d7df7eec12ed","type":"WidgetBox"},{"id":"c98c1ef4-27e4-4c11-a9b4-d1f41506c705","type":"WidgetBox"}]},"id":"843f80ff-8368-48d9-937e-4b8021ebce8d","type":"Row"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"f5510dd1-27d3-4b24-a67e-a2b6a4cefc87","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"cb658ddb-2bdf-4eb7-a3c7-77501f342c1b","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"40a983db-6458-439e-976c-2f801e175db4","type":"ColumnDataSource"},{"attributes":{},"id":"fc583b2b-717e-48b3-906b-7eeb5bc13260","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f5510dd1-27d3-4b24-a67e-a2b6a4cefc87","type":"ColumnDataSource"},"glyph":{"id":"4a3f4f69-b1ff-432d-b71f-269048b3569e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3789a9e9-0549-4cea-94f7-3c1b0009d6d4","type":"Line"},"selection_glyph":null,"view":{"id":"9c6eaae2-a9fd-4379-9fa0-9759ecdb2413","type":"CDSView"}},"id":"48f36f72-0a68-4ff3-abee-eb07376b4036","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"de492532-ccf9-4da4-8526-cc030155f173","type":"BasicTickFormatter"},"plot":{"id":"5dea9d04-f8f1-4914-a2f2-c2475d251b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"603596a8-17a8-4d02-af1a-c27e25577e27","type":"BasicTicker"}},"id":"baed6ee4-5f58-4266-b134-e49cdcc18959","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6a587fab-2418-49c1-b316-54596a46a7fd","type":"DataRange1d"},{"attributes":{},"id":"08267c38-9466-4f7d-870c-b93063f66970","type":"LinearScale"}],"root_ids":["fcd3714e-5bcc-48f9-8917-342536f42c4d"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e550ca07-9f2e-4c10-bbd7-ae407947517d","elementid":"a064c7d9-33cd-495d-95a4-00b0a6943ea9","modelid":"fcd3714e-5bcc-48f9-8917-342536f42c4d"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
