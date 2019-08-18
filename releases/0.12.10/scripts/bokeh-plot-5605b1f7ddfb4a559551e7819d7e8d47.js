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
      };var element = document.getElementById("38a8952d-9b5e-4544-8d43-a2322ecd895f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '38a8952d-9b5e-4544-8d43-a2322ecd895f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"d5de1e7c-3038-4faa-8df2-b2b86cf1e445":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea85d580-7f5e-444b-8050-4d9a1a3cb003","type":"Circle"},{"attributes":{},"id":"5e69ffc9-2a1c-4a13-91ae-f0b89ea9aa99","type":"ResetTool"},{"attributes":{},"id":"da278015-1c25-4eb5-84a1-14b19fbbe860","type":"BasicTickFormatter"},{"attributes":{},"id":"0f47a658-eb1a-4723-b68e-28a3289f9e13","type":"PanTool"},{"attributes":{"plot":{"id":"77dc68c0-4803-4628-824e-d76662b3b808","subtype":"Figure","type":"Plot"},"ticker":{"id":"01bab470-b80e-454b-99ff-f85cd950ed45","type":"BasicTicker"}},"id":"4310aa13-7aa9-4609-8157-13a56d724329","type":"Grid"},{"attributes":{},"id":"3eec6d20-5ed1-4877-b9c5-07765a84e999","type":"SaveTool"},{"attributes":{},"id":"6300b2f0-a685-4d4b-91b6-cfb26ffa244c","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3e756a9-cb18-4bdf-8ff8-62fe126f3a22","type":"Circle"},{"attributes":{"formatter":{"id":"6300b2f0-a685-4d4b-91b6-cfb26ffa244c","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"77dc68c0-4803-4628-824e-d76662b3b808","subtype":"Figure","type":"Plot"},"ticker":{"id":"01bab470-b80e-454b-99ff-f85cd950ed45","type":"BasicTicker"}},"id":"cc90bb2a-5960-44a0-b230-0cd2cdbd69ce","type":"LinearAxis"},{"attributes":{"overlay":{"id":"6ffe515c-185c-4e1f-b74d-e6795f86d60b","type":"BoxAnnotation"}},"id":"41be14b9-c5de-4204-9a3a-4ce19ffa8a90","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"acbfe24b-8310-45ff-9d18-c9b35456ac2c","type":"Title"},{"attributes":{},"id":"ada1af72-6c3d-49c1-a1e5-5689ed4bf525","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"cc90bb2a-5960-44a0-b230-0cd2cdbd69ce","type":"LinearAxis"}],"left":[{"id":"05045303-4ddd-40f7-afc3-3e4bb74943ab","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cc90bb2a-5960-44a0-b230-0cd2cdbd69ce","type":"LinearAxis"},{"id":"4310aa13-7aa9-4609-8157-13a56d724329","type":"Grid"},{"id":"05045303-4ddd-40f7-afc3-3e4bb74943ab","type":"LinearAxis"},{"id":"9477fbee-94b8-4bd1-988b-89fe2b132fd0","type":"Grid"},{"id":"6ffe515c-185c-4e1f-b74d-e6795f86d60b","type":"BoxAnnotation"},{"id":"9f59db78-8377-41dc-b1e3-4bdacc5a3144","type":"GlyphRenderer"}],"title":{"id":"acbfe24b-8310-45ff-9d18-c9b35456ac2c","type":"Title"},"toolbar":{"id":"bcf6265b-818c-4cb8-8e8f-7e01a99decd8","type":"Toolbar"},"x_range":{"id":"dba94c56-9eac-4ed8-bd8f-60c8b1c8cd4e","type":"DataRange1d"},"x_scale":{"id":"bc7f5820-1e4a-47a0-b211-d02d4e73fbe4","type":"LinearScale"},"y_range":{"id":"66d7390d-a418-4d1f-b42f-f47cbb6793a2","type":"DataRange1d"},"y_scale":{"id":"f6d936b6-f9a4-4e73-8bcc-baf6c6a1d980","type":"LinearScale"}},"id":"77dc68c0-4803-4628-824e-d76662b3b808","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f9bc4aab-5268-4d87-a048-ae42a3c19200","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6ffe515c-185c-4e1f-b74d-e6795f86d60b","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"66d7390d-a418-4d1f-b42f-f47cbb6793a2","type":"DataRange1d"},{"attributes":{"callback":null},"id":"dba94c56-9eac-4ed8-bd8f-60c8b1c8cd4e","type":"DataRange1d"},{"attributes":{},"id":"bc7f5820-1e4a-47a0-b211-d02d4e73fbe4","type":"LinearScale"},{"attributes":{},"id":"01bab470-b80e-454b-99ff-f85cd950ed45","type":"BasicTicker"},{"attributes":{"source":{"id":"dc94ea61-07b0-4f01-b37d-8a28cd0624c8","type":"ColumnDataSource"}},"id":"7a7b9862-70ce-46a9-9a7b-b22bebb79da3","type":"CDSView"},{"attributes":{},"id":"f6d936b6-f9a4-4e73-8bcc-baf6c6a1d980","type":"LinearScale"},{"attributes":{"formatter":{"id":"da278015-1c25-4eb5-84a1-14b19fbbe860","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"77dc68c0-4803-4628-824e-d76662b3b808","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8d2f6ab-81b3-4dae-a0a5-441faa0d69b7","type":"BasicTicker"}},"id":"05045303-4ddd-40f7-afc3-3e4bb74943ab","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f47a658-eb1a-4723-b68e-28a3289f9e13","type":"PanTool"},{"id":"ada1af72-6c3d-49c1-a1e5-5689ed4bf525","type":"WheelZoomTool"},{"id":"41be14b9-c5de-4204-9a3a-4ce19ffa8a90","type":"BoxZoomTool"},{"id":"3eec6d20-5ed1-4877-b9c5-07765a84e999","type":"SaveTool"},{"id":"5e69ffc9-2a1c-4a13-91ae-f0b89ea9aa99","type":"ResetTool"},{"id":"f9bc4aab-5268-4d87-a048-ae42a3c19200","type":"HelpTool"}]},"id":"bcf6265b-818c-4cb8-8e8f-7e01a99decd8","type":"Toolbar"},{"attributes":{},"id":"a8d2f6ab-81b3-4dae-a0a5-441faa0d69b7","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"dc94ea61-07b0-4f01-b37d-8a28cd0624c8","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"77dc68c0-4803-4628-824e-d76662b3b808","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8d2f6ab-81b3-4dae-a0a5-441faa0d69b7","type":"BasicTicker"}},"id":"9477fbee-94b8-4bd1-988b-89fe2b132fd0","type":"Grid"},{"attributes":{"data_source":{"id":"dc94ea61-07b0-4f01-b37d-8a28cd0624c8","type":"ColumnDataSource"},"glyph":{"id":"ea85d580-7f5e-444b-8050-4d9a1a3cb003","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a3e756a9-cb18-4bdf-8ff8-62fe126f3a22","type":"Circle"},"selection_glyph":null,"view":{"id":"7a7b9862-70ce-46a9-9a7b-b22bebb79da3","type":"CDSView"}},"id":"9f59db78-8377-41dc-b1e3-4bdacc5a3144","type":"GlyphRenderer"}],"root_ids":["77dc68c0-4803-4628-824e-d76662b3b808"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d5de1e7c-3038-4faa-8df2-b2b86cf1e445","elementid":"38a8952d-9b5e-4544-8d43-a2322ecd895f","modelid":"77dc68c0-4803-4628-824e-d76662b3b808"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
