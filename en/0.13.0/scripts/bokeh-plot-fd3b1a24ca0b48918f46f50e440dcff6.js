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
      };var element = document.getElementById("ff702484-8804-44b1-a9aa-f276461b30f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ff702484-8804-44b1-a9aa-f276461b30f7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"001001a0-a3e8-441c-a4f7-5c9057101ed5":{"roots":{"references":[{"attributes":{"callback":null},"id":"9c77d1c7-fa02-40ac-af9b-20c8b07ecca9","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"5b31031a-ba12-4425-826e-f994633357af","type":"Selection"},"selection_policy":{"id":"ceae654c-5b2e-409b-ae82-77927442bb57","type":"UnionRenderers"}},"id":"62fe5fa1-e633-4d7e-9be9-9518f3356ea0","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"865b3944-8f40-4071-8cd7-91a463765a7b","type":"Title"},{"attributes":{},"id":"217462ef-8471-462a-bc49-8c023c6bbad9","type":"LinearScale"},{"attributes":{},"id":"5b31031a-ba12-4425-826e-f994633357af","type":"Selection"},{"attributes":{"callback":null},"id":"7e20c420-f8bb-48d5-821f-5a03c44d24fe","type":"DataRange1d"},{"attributes":{},"id":"b77764ec-5ea7-4abe-8e72-e280b51a474f","type":"WheelZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"231aa218-0833-4332-9c33-ef2ca521019a","type":"AnnularWedge"},{"attributes":{},"id":"ed37e9fc-3537-42e2-b8eb-f503884c7273","type":"LinearScale"},{"attributes":{},"id":"91c7c5c2-eaee-49c8-8bea-6c42a319c3f6","type":"BasicTicker"},{"attributes":{},"id":"af9f3669-8aca-4ed7-af39-01da45b8e88a","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf0c2a8e-49be-44bf-855b-848a39d7c348","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"a2b97221-42b5-43c3-8889-ffc124051581","type":"LinearAxis"}],"left":[{"id":"89d47e97-9079-477c-9c39-b5c87b88030a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a2b97221-42b5-43c3-8889-ffc124051581","type":"LinearAxis"},{"id":"19514b47-48dc-4c16-b5a8-898c8a4ce0d9","type":"Grid"},{"id":"89d47e97-9079-477c-9c39-b5c87b88030a","type":"LinearAxis"},{"id":"3d0bec90-e38c-47a5-a4df-e8a982952fa6","type":"Grid"},{"id":"bf0c2a8e-49be-44bf-855b-848a39d7c348","type":"BoxAnnotation"},{"id":"28a29267-de58-40ff-b70e-410f1c5696cd","type":"GlyphRenderer"}],"title":{"id":"865b3944-8f40-4071-8cd7-91a463765a7b","type":"Title"},"toolbar":{"id":"600b25c9-91c4-4c11-b623-251f7976f1c3","type":"Toolbar"},"x_range":{"id":"9c77d1c7-fa02-40ac-af9b-20c8b07ecca9","type":"DataRange1d"},"x_scale":{"id":"ed37e9fc-3537-42e2-b8eb-f503884c7273","type":"LinearScale"},"y_range":{"id":"7e20c420-f8bb-48d5-821f-5a03c44d24fe","type":"DataRange1d"},"y_scale":{"id":"217462ef-8471-462a-bc49-8c023c6bbad9","type":"LinearScale"}},"id":"23b2af49-e411-4625-a3ad-5b7a3595e8f2","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"23b2af49-e411-4625-a3ad-5b7a3595e8f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"788e313e-511d-44dc-b8b7-3023da581691","type":"BasicTicker"}},"id":"19514b47-48dc-4c16-b5a8-898c8a4ce0d9","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"64dfa478-6270-4c14-b262-eab241cb8768","type":"AnnularWedge"},{"attributes":{},"id":"07f99f77-382e-4fa9-b592-d807ea361f2c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"62fe5fa1-e633-4d7e-9be9-9518f3356ea0","type":"ColumnDataSource"}},"id":"3a2035bd-e384-4ce7-bf1d-b7417c1b57eb","type":"CDSView"},{"attributes":{},"id":"2aaa72a6-6aaa-40f6-9a7d-29cf5d7278ec","type":"PanTool"},{"attributes":{},"id":"5265b63f-df34-4fb7-9a6e-2da5e47410da","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"23b2af49-e411-4625-a3ad-5b7a3595e8f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"91c7c5c2-eaee-49c8-8bea-6c42a319c3f6","type":"BasicTicker"}},"id":"3d0bec90-e38c-47a5-a4df-e8a982952fa6","type":"Grid"},{"attributes":{"data_source":{"id":"62fe5fa1-e633-4d7e-9be9-9518f3356ea0","type":"ColumnDataSource"},"glyph":{"id":"64dfa478-6270-4c14-b262-eab241cb8768","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"231aa218-0833-4332-9c33-ef2ca521019a","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"3a2035bd-e384-4ce7-bf1d-b7417c1b57eb","type":"CDSView"}},"id":"28a29267-de58-40ff-b70e-410f1c5696cd","type":"GlyphRenderer"},{"attributes":{},"id":"788e313e-511d-44dc-b8b7-3023da581691","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5265b63f-df34-4fb7-9a6e-2da5e47410da","type":"BasicTickFormatter"},"plot":{"id":"23b2af49-e411-4625-a3ad-5b7a3595e8f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"91c7c5c2-eaee-49c8-8bea-6c42a319c3f6","type":"BasicTicker"}},"id":"89d47e97-9079-477c-9c39-b5c87b88030a","type":"LinearAxis"},{"attributes":{},"id":"ceae654c-5b2e-409b-ae82-77927442bb57","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2aaa72a6-6aaa-40f6-9a7d-29cf5d7278ec","type":"PanTool"},{"id":"b77764ec-5ea7-4abe-8e72-e280b51a474f","type":"WheelZoomTool"},{"id":"2c4be262-3222-49a4-a435-af2b05ca305e","type":"BoxZoomTool"},{"id":"64f83543-83a8-400f-a35c-274f2282ce35","type":"SaveTool"},{"id":"614ec249-f00e-4549-b4b9-28da19147f52","type":"ResetTool"},{"id":"af9f3669-8aca-4ed7-af39-01da45b8e88a","type":"HelpTool"}]},"id":"600b25c9-91c4-4c11-b623-251f7976f1c3","type":"Toolbar"},{"attributes":{"overlay":{"id":"bf0c2a8e-49be-44bf-855b-848a39d7c348","type":"BoxAnnotation"}},"id":"2c4be262-3222-49a4-a435-af2b05ca305e","type":"BoxZoomTool"},{"attributes":{},"id":"614ec249-f00e-4549-b4b9-28da19147f52","type":"ResetTool"},{"attributes":{},"id":"64f83543-83a8-400f-a35c-274f2282ce35","type":"SaveTool"},{"attributes":{"formatter":{"id":"07f99f77-382e-4fa9-b592-d807ea361f2c","type":"BasicTickFormatter"},"plot":{"id":"23b2af49-e411-4625-a3ad-5b7a3595e8f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"788e313e-511d-44dc-b8b7-3023da581691","type":"BasicTicker"}},"id":"a2b97221-42b5-43c3-8889-ffc124051581","type":"LinearAxis"}],"root_ids":["23b2af49-e411-4625-a3ad-5b7a3595e8f2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"001001a0-a3e8-441c-a4f7-5c9057101ed5","roots":{"23b2af49-e411-4625-a3ad-5b7a3595e8f2":"ff702484-8804-44b1-a9aa-f276461b30f7"}}];
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