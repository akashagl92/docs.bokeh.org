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
      };var element = document.getElementById("581b3bb8-a254-449e-a6e8-befe2ada7225");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '581b3bb8-a254-449e-a6e8-befe2ada7225' but no matching script tag was found. ")
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
                    var docs_json = {"37d9dfa1-c89a-4800-965c-ded65ee13742":{"roots":{"references":[{"attributes":{"overlay":{"id":"47abe807-e560-486d-8647-5183d5e53cb9","type":"BoxAnnotation"}},"id":"f5dafb63-be98-40a9-a28b-5974c88411d1","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"f773cc08-0492-452b-ae6b-cb6c17982e80","type":"LinearAxis"}],"left":[{"id":"edfa7f06-2313-4efc-93ee-56368012cf10","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f773cc08-0492-452b-ae6b-cb6c17982e80","type":"LinearAxis"},{"id":"c104f181-32a7-4c85-aef8-b25ecf7ff41d","type":"Grid"},{"id":"edfa7f06-2313-4efc-93ee-56368012cf10","type":"LinearAxis"},{"id":"775dfab0-23c2-4e46-99d8-c01cfc3dbf88","type":"Grid"},{"id":"47abe807-e560-486d-8647-5183d5e53cb9","type":"BoxAnnotation"},{"id":"2fe408d9-056f-4790-b80e-1dff23cea37f","type":"GlyphRenderer"}],"title":{"id":"ca8efbef-4066-4da3-90f0-c96fa3f321c6","type":"Title"},"toolbar":{"id":"2114c311-394f-4dfc-a161-c76d047ea219","type":"Toolbar"},"x_range":{"id":"ca5485a4-9417-4e58-a4ba-23f4ec17176b","type":"DataRange1d"},"x_scale":{"id":"f885d1ea-2442-407a-a22b-987508a22797","type":"LinearScale"},"y_range":{"id":"6124d29d-bf63-4124-b604-52f7595fcf01","type":"DataRange1d"},"y_scale":{"id":"7dc863b0-6b8a-48b6-9bb6-9dec2eb1945d","type":"LinearScale"}},"id":"ea508c97-d1e2-4da2-92f8-add54604484f","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"47abe807-e560-486d-8647-5183d5e53cb9","type":"BoxAnnotation"},{"attributes":{},"id":"7ca47331-4039-4538-af3b-f134917823c8","type":"BasicTicker"},{"attributes":{},"id":"c6683b6c-0072-4891-8b74-178414af71f8","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2c8d1ccf-4331-43d8-bcf2-0c7385011d65","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e9812076-65ee-4a56-acad-383cb6d875d8","type":"PanTool"},{"id":"aebe89dd-d577-4789-8618-33f8e759c066","type":"WheelZoomTool"},{"id":"f5dafb63-be98-40a9-a28b-5974c88411d1","type":"BoxZoomTool"},{"id":"c6683b6c-0072-4891-8b74-178414af71f8","type":"SaveTool"},{"id":"e99290c6-4f9c-4764-aca7-b187087cbc52","type":"ResetTool"},{"id":"033097d5-cbf5-4093-8981-14eb85625a68","type":"HelpTool"}]},"id":"2114c311-394f-4dfc-a161-c76d047ea219","type":"Toolbar"},{"attributes":{},"id":"e99290c6-4f9c-4764-aca7-b187087cbc52","type":"ResetTool"},{"attributes":{"callback":null},"id":"ca5485a4-9417-4e58-a4ba-23f4ec17176b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"b7bc4baf-e302-4885-a1c7-653abed9e02e","type":"BasicTickFormatter"},"plot":{"id":"ea508c97-d1e2-4da2-92f8-add54604484f","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ca47331-4039-4538-af3b-f134917823c8","type":"BasicTicker"}},"id":"f773cc08-0492-452b-ae6b-cb6c17982e80","type":"LinearAxis"},{"attributes":{},"id":"033097d5-cbf5-4093-8981-14eb85625a68","type":"HelpTool"},{"attributes":{"callback":null},"id":"6124d29d-bf63-4124-b604-52f7595fcf01","type":"DataRange1d"},{"attributes":{},"id":"f885d1ea-2442-407a-a22b-987508a22797","type":"LinearScale"},{"attributes":{},"id":"b7bc4baf-e302-4885-a1c7-653abed9e02e","type":"BasicTickFormatter"},{"attributes":{},"id":"7dc863b0-6b8a-48b6-9bb6-9dec2eb1945d","type":"LinearScale"},{"attributes":{},"id":"e6eb4fb4-e3f3-421d-8721-f97118ca9cdf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ea508c97-d1e2-4da2-92f8-add54604484f","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ca47331-4039-4538-af3b-f134917823c8","type":"BasicTicker"}},"id":"c104f181-32a7-4c85-aef8-b25ecf7ff41d","type":"Grid"},{"attributes":{"formatter":{"id":"e6eb4fb4-e3f3-421d-8721-f97118ca9cdf","type":"BasicTickFormatter"},"plot":{"id":"ea508c97-d1e2-4da2-92f8-add54604484f","subtype":"Figure","type":"Plot"},"ticker":{"id":"68897262-93fd-4bc9-9ad7-4133ddb8fcfc","type":"BasicTicker"}},"id":"edfa7f06-2313-4efc-93ee-56368012cf10","type":"LinearAxis"},{"attributes":{},"id":"68897262-93fd-4bc9-9ad7-4133ddb8fcfc","type":"BasicTicker"},{"attributes":{},"id":"e9812076-65ee-4a56-acad-383cb6d875d8","type":"PanTool"},{"attributes":{},"id":"aebe89dd-d577-4789-8618-33f8e759c066","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"ea508c97-d1e2-4da2-92f8-add54604484f","subtype":"Figure","type":"Plot"},"ticker":{"id":"68897262-93fd-4bc9-9ad7-4133ddb8fcfc","type":"BasicTicker"}},"id":"775dfab0-23c2-4e46-99d8-c01cfc3dbf88","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"4704635d-e3ac-4d26-9d3d-ddc0ab718043","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"ca8efbef-4066-4da3-90f0-c96fa3f321c6","type":"Title"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"3d55a79a-9660-42fb-a16a-1554a4826d67","type":"ColumnDataSource"},{"attributes":{"source":{"id":"3d55a79a-9660-42fb-a16a-1554a4826d67","type":"ColumnDataSource"}},"id":"a198c99d-1a63-4c06-ad7e-8a02fb660c53","type":"CDSView"},{"attributes":{"data_source":{"id":"3d55a79a-9660-42fb-a16a-1554a4826d67","type":"ColumnDataSource"},"glyph":{"id":"2c8d1ccf-4331-43d8-bcf2-0c7385011d65","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4704635d-e3ac-4d26-9d3d-ddc0ab718043","type":"VBar"},"selection_glyph":null,"view":{"id":"a198c99d-1a63-4c06-ad7e-8a02fb660c53","type":"CDSView"}},"id":"2fe408d9-056f-4790-b80e-1dff23cea37f","type":"GlyphRenderer"}],"root_ids":["ea508c97-d1e2-4da2-92f8-add54604484f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"37d9dfa1-c89a-4800-965c-ded65ee13742","elementid":"581b3bb8-a254-449e-a6e8-befe2ada7225","modelid":"ea508c97-d1e2-4da2-92f8-add54604484f"}];
                
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
