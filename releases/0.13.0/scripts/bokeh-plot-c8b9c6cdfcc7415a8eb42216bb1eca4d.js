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
      };var element = document.getElementById("25e99f60-b947-4cc3-95d1-ab3e46beea5d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '25e99f60-b947-4cc3-95d1-ab3e46beea5d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2124899a-718d-4ef8-a2d8-b63cfdbe6f0a":{"roots":{"references":[{"attributes":{"plot":{"id":"3e1676bf-3596-457d-876c-f43b8b291b94","subtype":"Figure","type":"Plot"},"ticker":{"id":"01768286-5c9c-451b-9714-fd51490d5583","type":"BasicTicker"}},"id":"ae1d67e2-4923-4b80-9f89-284dead98b61","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"3e1676bf-3596-457d-876c-f43b8b291b94","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbb472a4-2ce4-458f-9a67-fc24e83cb16e","type":"BasicTicker"}},"id":"7fe6aeac-239f-4ff3-b915-2a5ef6536f64","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"54fd2b2d-e04a-4f63-a802-961a435f593d","type":"Oval"},{"attributes":{"callback":null},"id":"910d4b96-716d-407c-9e41-ab1d73673b24","type":"DataRange1d"},{"attributes":{"source":{"id":"7aec4900-cb8a-4025-aaae-548aeb2ecb2c","type":"ColumnDataSource"}},"id":"60d7470a-9301-4848-96b1-944d41bf5403","type":"CDSView"},{"attributes":{},"id":"6af750b2-58a8-4873-a492-be17ec0cdfb9","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"04516fd2-fe5d-4159-82d0-42273b99aae6","type":"BoxAnnotation"},{"attributes":{},"id":"5ed9e60f-fd92-4e7f-856c-71d9aeb70b16","type":"HelpTool"},{"attributes":{},"id":"0d150608-4e9a-46e9-9344-ee633c574fb8","type":"WheelZoomTool"},{"attributes":{},"id":"92ccc8fa-1436-4890-b299-e3f99d993508","type":"PanTool"},{"attributes":{},"id":"73e996cb-c1ba-49f2-b0e6-45f0a7b062b4","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"04516fd2-fe5d-4159-82d0-42273b99aae6","type":"BoxAnnotation"}},"id":"93fce2af-7cef-41f1-9908-7c3c7e11772d","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b96ace5-fa4f-4e4c-9498-aebe9a7bba17","type":"Oval"},{"attributes":{},"id":"5b94fe14-5a76-47da-aa9d-0a8d9012fda1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5b94fe14-5a76-47da-aa9d-0a8d9012fda1","type":"BasicTickFormatter"},"plot":{"id":"3e1676bf-3596-457d-876c-f43b8b291b94","subtype":"Figure","type":"Plot"},"ticker":{"id":"01768286-5c9c-451b-9714-fd51490d5583","type":"BasicTicker"}},"id":"926f5161-2d59-4236-aa89-c08625d46086","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"9a9b129d-c788-47d3-9091-4c3a3a35f0f9","type":"Title"},{"attributes":{"formatter":{"id":"fac4daec-c61c-4c67-ae6d-b9311d5a5950","type":"BasicTickFormatter"},"plot":{"id":"3e1676bf-3596-457d-876c-f43b8b291b94","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbb472a4-2ce4-458f-9a67-fc24e83cb16e","type":"BasicTicker"}},"id":"9fe5c892-70a1-409b-b835-fcbb228c9b99","type":"LinearAxis"},{"attributes":{},"id":"fac4daec-c61c-4c67-ae6d-b9311d5a5950","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7aec4900-cb8a-4025-aaae-548aeb2ecb2c","type":"ColumnDataSource"},"glyph":{"id":"0b96ace5-fa4f-4e4c-9498-aebe9a7bba17","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54fd2b2d-e04a-4f63-a802-961a435f593d","type":"Oval"},"selection_glyph":null,"view":{"id":"60d7470a-9301-4848-96b1-944d41bf5403","type":"CDSView"}},"id":"7269c34f-dbac-481b-b930-23fd243c270a","type":"GlyphRenderer"},{"attributes":{},"id":"9455772c-97f0-407d-b027-c53f6a45019b","type":"Selection"},{"attributes":{"callback":null},"id":"d454f338-0476-4361-ba69-e3cc3bf81c20","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"9455772c-97f0-407d-b027-c53f6a45019b","type":"Selection"},"selection_policy":{"id":"73e996cb-c1ba-49f2-b0e6-45f0a7b062b4","type":"UnionRenderers"}},"id":"7aec4900-cb8a-4025-aaae-548aeb2ecb2c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"926f5161-2d59-4236-aa89-c08625d46086","type":"LinearAxis"}],"left":[{"id":"9fe5c892-70a1-409b-b835-fcbb228c9b99","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"926f5161-2d59-4236-aa89-c08625d46086","type":"LinearAxis"},{"id":"ae1d67e2-4923-4b80-9f89-284dead98b61","type":"Grid"},{"id":"9fe5c892-70a1-409b-b835-fcbb228c9b99","type":"LinearAxis"},{"id":"7fe6aeac-239f-4ff3-b915-2a5ef6536f64","type":"Grid"},{"id":"04516fd2-fe5d-4159-82d0-42273b99aae6","type":"BoxAnnotation"},{"id":"7269c34f-dbac-481b-b930-23fd243c270a","type":"GlyphRenderer"}],"title":{"id":"9a9b129d-c788-47d3-9091-4c3a3a35f0f9","type":"Title"},"toolbar":{"id":"4ee452e2-4f1e-461c-8900-f3ed6a54de25","type":"Toolbar"},"x_range":{"id":"d454f338-0476-4361-ba69-e3cc3bf81c20","type":"DataRange1d"},"x_scale":{"id":"af02adc5-8a22-4b84-8bf8-cb3636dc7879","type":"LinearScale"},"y_range":{"id":"910d4b96-716d-407c-9e41-ab1d73673b24","type":"DataRange1d"},"y_scale":{"id":"e91044bd-5e1c-4150-b0e2-ba8313b194ea","type":"LinearScale"}},"id":"3e1676bf-3596-457d-876c-f43b8b291b94","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e91044bd-5e1c-4150-b0e2-ba8313b194ea","type":"LinearScale"},{"attributes":{},"id":"01768286-5c9c-451b-9714-fd51490d5583","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"92ccc8fa-1436-4890-b299-e3f99d993508","type":"PanTool"},{"id":"0d150608-4e9a-46e9-9344-ee633c574fb8","type":"WheelZoomTool"},{"id":"93fce2af-7cef-41f1-9908-7c3c7e11772d","type":"BoxZoomTool"},{"id":"205b601c-2dea-493a-a76a-acb87137c3b0","type":"SaveTool"},{"id":"6af750b2-58a8-4873-a492-be17ec0cdfb9","type":"ResetTool"},{"id":"5ed9e60f-fd92-4e7f-856c-71d9aeb70b16","type":"HelpTool"}]},"id":"4ee452e2-4f1e-461c-8900-f3ed6a54de25","type":"Toolbar"},{"attributes":{},"id":"205b601c-2dea-493a-a76a-acb87137c3b0","type":"SaveTool"},{"attributes":{},"id":"dbb472a4-2ce4-458f-9a67-fc24e83cb16e","type":"BasicTicker"},{"attributes":{},"id":"af02adc5-8a22-4b84-8bf8-cb3636dc7879","type":"LinearScale"}],"root_ids":["3e1676bf-3596-457d-876c-f43b8b291b94"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2124899a-718d-4ef8-a2d8-b63cfdbe6f0a","roots":{"3e1676bf-3596-457d-876c-f43b8b291b94":"25e99f60-b947-4cc3-95d1-ab3e46beea5d"}}];
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