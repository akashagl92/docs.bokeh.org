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
      };var element = document.getElementById("9952159b-edba-4192-ae88-91f9949f29ee");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9952159b-edba-4192-ae88-91f9949f29ee' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"67a5ff72-136d-40e9-b7c0-2fcd61b1d1d4":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"c77d1a05-745f-4aa2-8c95-b4ef898bd8c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"0ba32b91-204e-4a21-925d-42e6ee261c6d","type":"BasicTicker"}},"id":"7d588018-a932-4cc0-ab8e-c36b541f3d69","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"47ae30d7-a8a5-463a-bfd9-fce3309ad911","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1a554501-ee19-4f05-a933-30f8d97c682e","type":"BoxAnnotation"},{"attributes":{},"id":"e627ead2-b583-4faa-bba1-031af7365650","type":"PanTool"},{"attributes":{},"id":"5f0019d2-ed32-4ede-9679-ac9550b593a3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5b21f679-b645-4ffa-a6ff-e314b0e850c0","type":"ColumnDataSource"},"glyph":{"id":"59a14d17-9fb3-4c11-a8bd-d55bb306e729","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47ae30d7-a8a5-463a-bfd9-fce3309ad911","type":"Rect"},"selection_glyph":null,"view":{"id":"0c43a314-1ddf-4287-910f-4b8c271db175","type":"CDSView"}},"id":"4a36c198-289f-4622-ad85-e6ca0f921f42","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9f3ce89e-0b11-4d1d-94ce-ebb6cb3dfee4","type":"LinearAxis"}],"left":[{"id":"d0deb0b8-953f-423c-8c04-3be7e4cbd70b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9f3ce89e-0b11-4d1d-94ce-ebb6cb3dfee4","type":"LinearAxis"},{"id":"9ef4f703-5714-4718-b444-39afb2d2d1b4","type":"Grid"},{"id":"d0deb0b8-953f-423c-8c04-3be7e4cbd70b","type":"LinearAxis"},{"id":"7d588018-a932-4cc0-ab8e-c36b541f3d69","type":"Grid"},{"id":"1a554501-ee19-4f05-a933-30f8d97c682e","type":"BoxAnnotation"},{"id":"4a36c198-289f-4622-ad85-e6ca0f921f42","type":"GlyphRenderer"}],"title":{"id":"49287d87-4383-4a00-936d-1f69b03da326","type":"Title"},"toolbar":{"id":"41b38017-023e-4776-9525-c1ca248f4df0","type":"Toolbar"},"x_range":{"id":"5909c006-2ad8-4417-9412-c9815ae3b3f2","type":"DataRange1d"},"x_scale":{"id":"6d89d0fe-1545-4525-a1d9-fd5138a33c89","type":"LinearScale"},"y_range":{"id":"bf46650a-8bee-47f5-be11-11774de49580","type":"DataRange1d"},"y_scale":{"id":"6cd2ad44-728b-4c53-a0ab-9c73e39f4d70","type":"LinearScale"}},"id":"c77d1a05-745f-4aa2-8c95-b4ef898bd8c8","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e627ead2-b583-4faa-bba1-031af7365650","type":"PanTool"},{"id":"e8bdb623-901e-4c34-9be8-824626b0efed","type":"WheelZoomTool"},{"id":"c3e5f321-ab91-4501-b487-8b2ceadcb0bd","type":"BoxZoomTool"},{"id":"1f20a091-0398-4c04-9d54-53e92c9727b6","type":"SaveTool"},{"id":"a901a976-d4eb-499a-b9f6-e58a38007e28","type":"ResetTool"},{"id":"1e647bc1-5c7a-4d9c-9a72-cc77bab4c69c","type":"HelpTool"}]},"id":"41b38017-023e-4776-9525-c1ca248f4df0","type":"Toolbar"},{"attributes":{"source":{"id":"5b21f679-b645-4ffa-a6ff-e314b0e850c0","type":"ColumnDataSource"}},"id":"0c43a314-1ddf-4287-910f-4b8c271db175","type":"CDSView"},{"attributes":{"callback":null},"id":"5909c006-2ad8-4417-9412-c9815ae3b3f2","type":"DataRange1d"},{"attributes":{},"id":"e8bdb623-901e-4c34-9be8-824626b0efed","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"59a14d17-9fb3-4c11-a8bd-d55bb306e729","type":"Rect"},{"attributes":{"overlay":{"id":"1a554501-ee19-4f05-a933-30f8d97c682e","type":"BoxAnnotation"}},"id":"c3e5f321-ab91-4501-b487-8b2ceadcb0bd","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"bf46650a-8bee-47f5-be11-11774de49580","type":"DataRange1d"},{"attributes":{},"id":"1f20a091-0398-4c04-9d54-53e92c9727b6","type":"SaveTool"},{"attributes":{},"id":"6d89d0fe-1545-4525-a1d9-fd5138a33c89","type":"LinearScale"},{"attributes":{},"id":"a901a976-d4eb-499a-b9f6-e58a38007e28","type":"ResetTool"},{"attributes":{"plot":{"id":"c77d1a05-745f-4aa2-8c95-b4ef898bd8c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"20bac46f-6938-4e54-977e-5ee9965b9522","type":"BasicTicker"}},"id":"9ef4f703-5714-4718-b444-39afb2d2d1b4","type":"Grid"},{"attributes":{},"id":"1e647bc1-5c7a-4d9c-9a72-cc77bab4c69c","type":"HelpTool"},{"attributes":{},"id":"6cd2ad44-728b-4c53-a0ab-9c73e39f4d70","type":"LinearScale"},{"attributes":{},"id":"d586b588-ff7e-48bf-96e4-9ef598cea7a4","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d586b588-ff7e-48bf-96e4-9ef598cea7a4","type":"BasicTickFormatter"},"plot":{"id":"c77d1a05-745f-4aa2-8c95-b4ef898bd8c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"20bac46f-6938-4e54-977e-5ee9965b9522","type":"BasicTicker"}},"id":"9f3ce89e-0b11-4d1d-94ce-ebb6cb3dfee4","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"1de58db4-6703-40d6-81fa-990a98a47ab8","type":"Selection"},"selection_policy":{"id":"9d7d9f6e-2566-4b69-9a3f-0af9b7a8ef42","type":"UnionRenderers"}},"id":"5b21f679-b645-4ffa-a6ff-e314b0e850c0","type":"ColumnDataSource"},{"attributes":{},"id":"20bac46f-6938-4e54-977e-5ee9965b9522","type":"BasicTicker"},{"attributes":{},"id":"1de58db4-6703-40d6-81fa-990a98a47ab8","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"49287d87-4383-4a00-936d-1f69b03da326","type":"Title"},{"attributes":{},"id":"9d7d9f6e-2566-4b69-9a3f-0af9b7a8ef42","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"5f0019d2-ed32-4ede-9679-ac9550b593a3","type":"BasicTickFormatter"},"plot":{"id":"c77d1a05-745f-4aa2-8c95-b4ef898bd8c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"0ba32b91-204e-4a21-925d-42e6ee261c6d","type":"BasicTicker"}},"id":"d0deb0b8-953f-423c-8c04-3be7e4cbd70b","type":"LinearAxis"},{"attributes":{},"id":"0ba32b91-204e-4a21-925d-42e6ee261c6d","type":"BasicTicker"}],"root_ids":["c77d1a05-745f-4aa2-8c95-b4ef898bd8c8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"67a5ff72-136d-40e9-b7c0-2fcd61b1d1d4","roots":{"c77d1a05-745f-4aa2-8c95-b4ef898bd8c8":"9952159b-edba-4192-ae88-91f9949f29ee"}}];
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