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
      };var element = document.getElementById("2eb8221d-84cf-45d1-81ce-fc4c8a8e0b0c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2eb8221d-84cf-45d1-81ce-fc4c8a8e0b0c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"49b16ab8-edf7-4d40-8068-4e39c1b2b75f":{"roots":{"references":[{"attributes":{},"id":"d5c79f66-72df-4700-ad63-6a721875f4d4","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"b21715ae-df2f-4763-bbf8-6ccd91662294","type":"Selection"},"selection_policy":{"id":"76876da8-4430-462d-a900-c04da00b29e1","type":"UnionRenderers"}},"id":"7ae2e520-a3d1-41cd-a2e7-c49aa3ae4924","type":"ColumnDataSource"},{"attributes":{},"id":"705c6f4e-4a5a-4704-b763-a64cdd9fd231","type":"BasicTicker"},{"attributes":{},"id":"906292f2-ad05-49fd-8a18-f82d390ec5a5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"59674d50-f31e-4909-a8c2-9f575b536ef2","type":"Plot"},"ticker":{"id":"906292f2-ad05-49fd-8a18-f82d390ec5a5","type":"BasicTicker"}},"id":"0134ab7a-8c76-42c0-bc5d-55659f263ba8","type":"Grid"},{"attributes":{},"id":"b21715ae-df2f-4763-bbf8-6ccd91662294","type":"Selection"},{"attributes":{"callback":null},"id":"a753edfe-6456-47ce-94a5-1f64ea5c0478","type":"DataRange1d"},{"attributes":{},"id":"7abb6b1e-fdc2-4801-95e3-394f04855d87","type":"LinearScale"},{"attributes":{},"id":"4483315d-66dc-43f0-9063-3764a919c175","type":"BasicTickFormatter"},{"attributes":{},"id":"76876da8-4430-462d-a900-c04da00b29e1","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"7bf214dd-27eb-45a0-8ad6-1db3962321d7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4483315d-66dc-43f0-9063-3764a919c175","type":"BasicTickFormatter"},"plot":{"id":"59674d50-f31e-4909-a8c2-9f575b536ef2","type":"Plot"},"ticker":{"id":"705c6f4e-4a5a-4704-b763-a64cdd9fd231","type":"BasicTicker"}},"id":"3539911c-98fb-45c8-8989-29104ec436dc","type":"LinearAxis"},{"attributes":{"plot":{"id":"59674d50-f31e-4909-a8c2-9f575b536ef2","type":"Plot"},"ticker":{"id":"705c6f4e-4a5a-4704-b763-a64cdd9fd231","type":"BasicTicker"}},"id":"02613831-235f-4916-9515-a6ffdc82b00a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"41f39f30-8be3-4d49-b745-388b465d2a32","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"cc65ba15-9324-4809-93ae-b8cdf2bfb194","type":"Oval"},{"attributes":{"below":[{"id":"3539911c-98fb-45c8-8989-29104ec436dc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4a998d46-38d8-4bc5-8bee-3f33dea1c8a8","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ea992d88-ece7-4077-b64b-b21ffa354e60","type":"GlyphRenderer"},{"id":"3539911c-98fb-45c8-8989-29104ec436dc","type":"LinearAxis"},{"id":"4a998d46-38d8-4bc5-8bee-3f33dea1c8a8","type":"LinearAxis"},{"id":"02613831-235f-4916-9515-a6ffdc82b00a","type":"Grid"},{"id":"0134ab7a-8c76-42c0-bc5d-55659f263ba8","type":"Grid"}],"title":null,"toolbar":{"id":"41f39f30-8be3-4d49-b745-388b465d2a32","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7bf214dd-27eb-45a0-8ad6-1db3962321d7","type":"DataRange1d"},"x_scale":{"id":"d5c79f66-72df-4700-ad63-6a721875f4d4","type":"LinearScale"},"y_range":{"id":"a753edfe-6456-47ce-94a5-1f64ea5c0478","type":"DataRange1d"},"y_scale":{"id":"7abb6b1e-fdc2-4801-95e3-394f04855d87","type":"LinearScale"}},"id":"59674d50-f31e-4909-a8c2-9f575b536ef2","type":"Plot"},{"attributes":{},"id":"b7a1d1f5-8c08-49cb-86d8-ed2a3a5799ad","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b7a1d1f5-8c08-49cb-86d8-ed2a3a5799ad","type":"BasicTickFormatter"},"plot":{"id":"59674d50-f31e-4909-a8c2-9f575b536ef2","type":"Plot"},"ticker":{"id":"906292f2-ad05-49fd-8a18-f82d390ec5a5","type":"BasicTicker"}},"id":"4a998d46-38d8-4bc5-8bee-3f33dea1c8a8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7ae2e520-a3d1-41cd-a2e7-c49aa3ae4924","type":"ColumnDataSource"},"glyph":{"id":"cc65ba15-9324-4809-93ae-b8cdf2bfb194","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"75b5a468-1c3e-4b15-a367-7e28c105c963","type":"CDSView"}},"id":"ea992d88-ece7-4077-b64b-b21ffa354e60","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7ae2e520-a3d1-41cd-a2e7-c49aa3ae4924","type":"ColumnDataSource"}},"id":"75b5a468-1c3e-4b15-a367-7e28c105c963","type":"CDSView"}],"root_ids":["59674d50-f31e-4909-a8c2-9f575b536ef2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"49b16ab8-edf7-4d40-8068-4e39c1b2b75f","roots":{"59674d50-f31e-4909-a8c2-9f575b536ef2":"2eb8221d-84cf-45d1-81ce-fc4c8a8e0b0c"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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