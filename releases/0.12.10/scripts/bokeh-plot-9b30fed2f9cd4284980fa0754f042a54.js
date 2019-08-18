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
      };var element = document.getElementById("aca504f4-8e79-4411-8527-48529aace37e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aca504f4-8e79-4411-8527-48529aace37e' but no matching script tag was found. ")
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
                    var docs_json = {"e620329f-5f23-4039-b52d-c3e60497c42d":{"roots":{"references":[{"attributes":{"formatter":{"id":"a56361e3-17c3-4a87-99e6-adfdce9ed012","type":"BasicTickFormatter"},"plot":{"id":"573f2f9d-4c97-4dbd-a05e-629e6c050e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ec13f1b-97c4-42ba-ae4d-4fad46e094b0","type":"BasicTicker"}},"id":"bfa86c75-9bb9-4af5-b650-4cf5ebfbbb0e","type":"LinearAxis"},{"attributes":{},"id":"a56361e3-17c3-4a87-99e6-adfdce9ed012","type":"BasicTickFormatter"},{"attributes":{},"id":"bad60afc-3e03-4358-81ba-96aa1d1dddd0","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0ff59ead-bf8b-492b-8e7b-29fc220da5e2","type":"DataRange1d"},{"attributes":{"source":{"id":"dd0439c0-37d8-4f87-9f49-1df128bfea5c","type":"ColumnDataSource"}},"id":"350894e7-912d-4c96-bd36-ecc0aba31fa2","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b1757ad-1a72-47f3-8888-3d4b0a983c44","type":"BoxAnnotation"},{"attributes":{},"id":"04c59f62-5fc4-4b13-b1e4-02092608a9d9","type":"SaveTool"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"e067967f-2a1f-41e6-b12b-cd6d19b6d539","type":"Wedge"},{"attributes":{"dimension":1,"plot":{"id":"573f2f9d-4c97-4dbd-a05e-629e6c050e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"440868e3-68aa-4273-a94d-68cd9a807234","type":"BasicTicker"}},"id":"e29734f0-4bf8-4e5b-a05f-7e1a3c941c46","type":"Grid"},{"attributes":{"data_source":{"id":"dd0439c0-37d8-4f87-9f49-1df128bfea5c","type":"ColumnDataSource"},"glyph":{"id":"e067967f-2a1f-41e6-b12b-cd6d19b6d539","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24c663bb-8beb-40ec-92d9-7d887bef9d33","type":"Wedge"},"selection_glyph":null,"view":{"id":"350894e7-912d-4c96-bd36-ecc0aba31fa2","type":"CDSView"}},"id":"21972eca-161e-4127-a6d8-506d65dafe62","type":"GlyphRenderer"},{"attributes":{},"id":"274567a9-faae-4191-a9d7-09c06c4fc686","type":"LinearScale"},{"attributes":{},"id":"1ec13f1b-97c4-42ba-ae4d-4fad46e094b0","type":"BasicTicker"},{"attributes":{"overlay":{"id":"0b1757ad-1a72-47f3-8888-3d4b0a983c44","type":"BoxAnnotation"}},"id":"96af3d95-01ec-4580-960d-af4703902d65","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"bad60afc-3e03-4358-81ba-96aa1d1dddd0","type":"BasicTickFormatter"},"plot":{"id":"573f2f9d-4c97-4dbd-a05e-629e6c050e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"440868e3-68aa-4273-a94d-68cd9a807234","type":"BasicTicker"}},"id":"b6b73937-fcd3-4009-b3a9-5a84143ad383","type":"LinearAxis"},{"attributes":{},"id":"142d8e81-b1a7-468e-8d10-c153c9b612f6","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3ecdcb8d-143b-4585-847b-ffc1563cf141","type":"PanTool"},{"id":"142d8e81-b1a7-468e-8d10-c153c9b612f6","type":"WheelZoomTool"},{"id":"96af3d95-01ec-4580-960d-af4703902d65","type":"BoxZoomTool"},{"id":"04c59f62-5fc4-4b13-b1e4-02092608a9d9","type":"SaveTool"},{"id":"bfd67f41-13cc-4a0c-8cb5-f04a6b6b6e99","type":"ResetTool"},{"id":"6b284fea-e374-4b59-9da4-b0d9b8a6a9a8","type":"HelpTool"}]},"id":"e501348f-2f3c-47ea-8071-92cf417a07cf","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"db84194b-8643-4060-9a32-a23be0d41940","type":"Title"},{"attributes":{},"id":"440868e3-68aa-4273-a94d-68cd9a807234","type":"BasicTicker"},{"attributes":{"below":[{"id":"bfa86c75-9bb9-4af5-b650-4cf5ebfbbb0e","type":"LinearAxis"}],"left":[{"id":"b6b73937-fcd3-4009-b3a9-5a84143ad383","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bfa86c75-9bb9-4af5-b650-4cf5ebfbbb0e","type":"LinearAxis"},{"id":"c4df1ae8-7cf2-453d-b972-3915f80fcf03","type":"Grid"},{"id":"b6b73937-fcd3-4009-b3a9-5a84143ad383","type":"LinearAxis"},{"id":"e29734f0-4bf8-4e5b-a05f-7e1a3c941c46","type":"Grid"},{"id":"0b1757ad-1a72-47f3-8888-3d4b0a983c44","type":"BoxAnnotation"},{"id":"21972eca-161e-4127-a6d8-506d65dafe62","type":"GlyphRenderer"}],"title":{"id":"db84194b-8643-4060-9a32-a23be0d41940","type":"Title"},"toolbar":{"id":"e501348f-2f3c-47ea-8071-92cf417a07cf","type":"Toolbar"},"x_range":{"id":"0ff59ead-bf8b-492b-8e7b-29fc220da5e2","type":"DataRange1d"},"x_scale":{"id":"274567a9-faae-4191-a9d7-09c06c4fc686","type":"LinearScale"},"y_range":{"id":"15c0100b-1b8d-428b-aa85-64e105448dc4","type":"DataRange1d"},"y_scale":{"id":"0306d65f-b71c-4601-996d-ba6a9729bf5c","type":"LinearScale"}},"id":"573f2f9d-4c97-4dbd-a05e-629e6c050e87","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"bfd67f41-13cc-4a0c-8cb5-f04a6b6b6e99","type":"ResetTool"},{"attributes":{},"id":"6b284fea-e374-4b59-9da4-b0d9b8a6a9a8","type":"HelpTool"},{"attributes":{"plot":{"id":"573f2f9d-4c97-4dbd-a05e-629e6c050e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ec13f1b-97c4-42ba-ae4d-4fad46e094b0","type":"BasicTicker"}},"id":"c4df1ae8-7cf2-453d-b972-3915f80fcf03","type":"Grid"},{"attributes":{},"id":"3ecdcb8d-143b-4585-847b-ffc1563cf141","type":"PanTool"},{"attributes":{},"id":"0306d65f-b71c-4601-996d-ba6a9729bf5c","type":"LinearScale"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"24c663bb-8beb-40ec-92d9-7d887bef9d33","type":"Wedge"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"dd0439c0-37d8-4f87-9f49-1df128bfea5c","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15c0100b-1b8d-428b-aa85-64e105448dc4","type":"DataRange1d"}],"root_ids":["573f2f9d-4c97-4dbd-a05e-629e6c050e87"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e620329f-5f23-4039-b52d-c3e60497c42d","elementid":"aca504f4-8e79-4411-8527-48529aace37e","modelid":"573f2f9d-4c97-4dbd-a05e-629e6c050e87"}];
                
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
