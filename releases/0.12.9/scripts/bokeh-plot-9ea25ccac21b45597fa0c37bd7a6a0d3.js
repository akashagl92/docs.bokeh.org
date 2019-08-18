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
      };var element = document.getElementById("c0d442ba-e45b-4445-8c0e-5990ffa6b4d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c0d442ba-e45b-4445-8c0e-5990ffa6b4d3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"ef2aefb6-9776-4d82-b103-a65cb0ae1bb7":{"roots":{"references":[{"attributes":{"args":{"object":{"id":"6ef549fc-1000-450b-80fd-b347ce4539eb","type":"GlyphRenderer"},"toggle":{"id":"c67a994b-7689-49b9-9926-d664417290af","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"b2058ec0-0ebd-4913-bf14-f8e0f4b93367","type":"CustomJS"},{"attributes":{},"id":"dc713046-6d43-4d12-9c36-9eb4b8efaf5f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"14c684c9-3bb5-4c72-8813-12604594c79f","type":"ColumnDataSource"}},"id":"0236c988-2896-49bf-98b6-662be673dcee","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5e0783e4-d5ab-452b-8430-5114ba9945fe","type":"Toolbar"},{"attributes":{"button_type":"success","callback":{"id":"402d257f-a1e2-4820-8ad1-8efa18bbf4aa","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"d68b25d3-136b-4d79-8541-485407888f36","type":"Toggle"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a35ae13e-e5a1-437a-a74b-aa728e2b13f0","type":"Line"},{"attributes":{"data_source":{"id":"14c684c9-3bb5-4c72-8813-12604594c79f","type":"ColumnDataSource"},"glyph":{"id":"a35ae13e-e5a1-437a-a74b-aa728e2b13f0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9ffef386-4c16-4faa-a7cb-523d63dda200","type":"Line"},"selection_glyph":null,"view":{"id":"0236c988-2896-49bf-98b6-662be673dcee","type":"CDSView"}},"id":"52f60b57-e7af-4a37-814b-9c4a39a230a5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0bf5bfc4-1ee7-47e7-8984-06a4c910ebc8","type":"ColumnDataSource"},"glyph":{"id":"f092e4d4-c77d-4706-9c22-d2178302d7a4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eb04e95d-6369-4bba-9cb5-1b0aebc026cf","type":"Line"},"selection_glyph":null,"view":{"id":"abc670a8-bf33-4c9a-8635-6efcab15da27","type":"CDSView"}},"id":"6ef549fc-1000-450b-80fd-b347ce4539eb","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"6f2e856b-b30c-46a6-a411-62ab2e8c15eb","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"14c684c9-3bb5-4c72-8813-12604594c79f","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"fe3bf392-3c8b-407f-aef5-935779a0c4a2","type":"LinearAxis"}],"left":[{"id":"9810d786-a61d-4888-ad38-1604376f7821","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"fe3bf392-3c8b-407f-aef5-935779a0c4a2","type":"LinearAxis"},{"id":"5c3b0ab6-a9d3-44ba-ab91-73283c9e98d4","type":"Grid"},{"id":"9810d786-a61d-4888-ad38-1604376f7821","type":"LinearAxis"},{"id":"a58ae7aa-e2f9-4c75-83a1-5bb5a3ce3030","type":"Grid"},{"id":"52f60b57-e7af-4a37-814b-9c4a39a230a5","type":"GlyphRenderer"},{"id":"6ef549fc-1000-450b-80fd-b347ce4539eb","type":"GlyphRenderer"},{"id":"bb417b4e-d0c1-4567-a963-d9b8ff748529","type":"BoxAnnotation"}],"title":{"id":"6f2e856b-b30c-46a6-a411-62ab2e8c15eb","type":"Title"},"toolbar":{"id":"5e0783e4-d5ab-452b-8430-5114ba9945fe","type":"Toolbar"},"x_range":{"id":"fb17382d-9031-4bfd-84a4-8e8937f47b6d","type":"DataRange1d"},"x_scale":{"id":"66ee7304-82a0-4a8f-be8e-66d91744b49c","type":"LinearScale"},"y_range":{"id":"9d13dd03-5585-4cce-983f-172206f63b90","type":"DataRange1d"},"y_scale":{"id":"cec6abc3-e4ce-4e34-885b-15345c2a602f","type":"LinearScale"}},"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"dc713046-6d43-4d12-9c36-9eb4b8efaf5f","type":"BasicTickFormatter"},"plot":{"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"},"ticker":{"id":"08d8db05-5ca4-4d5a-a41e-9367c3b52411","type":"BasicTicker"}},"id":"fe3bf392-3c8b-407f-aef5-935779a0c4a2","type":"LinearAxis"},{"attributes":{},"id":"cec6abc3-e4ce-4e34-885b-15345c2a602f","type":"LinearScale"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f092e4d4-c77d-4706-9c22-d2178302d7a4","type":"Line"},{"attributes":{},"id":"08d8db05-5ca4-4d5a-a41e-9367c3b52411","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"},"right":2.5},"id":"bb417b4e-d0c1-4567-a963-d9b8ff748529","type":"BoxAnnotation"},{"attributes":{},"id":"66ee7304-82a0-4a8f-be8e-66d91744b49c","type":"LinearScale"},{"attributes":{"children":[{"id":"c67a994b-7689-49b9-9926-d664417290af","type":"Toggle"}]},"id":"4a79af51-51cd-4a16-9e48-45f84efc6441","type":"WidgetBox"},{"attributes":{"children":[{"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"}]},"id":"0d11027e-903c-42f1-b175-e82ea1367cf7","type":"Row"},{"attributes":{"source":{"id":"0bf5bfc4-1ee7-47e7-8984-06a4c910ebc8","type":"ColumnDataSource"}},"id":"abc670a8-bf33-4c9a-8635-6efcab15da27","type":"CDSView"},{"attributes":{"plot":{"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"},"ticker":{"id":"08d8db05-5ca4-4d5a-a41e-9367c3b52411","type":"BasicTicker"}},"id":"5c3b0ab6-a9d3-44ba-ab91-73283c9e98d4","type":"Grid"},{"attributes":{"formatter":{"id":"958b16da-8ddb-41e8-885b-314c3195a5bc","type":"BasicTickFormatter"},"plot":{"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"},"ticker":{"id":"e013c09d-a063-403e-8c36-4c77e98c2829","type":"BasicTicker"}},"id":"9810d786-a61d-4888-ad38-1604376f7821","type":"LinearAxis"},{"attributes":{"children":[{"id":"d68b25d3-136b-4d79-8541-485407888f36","type":"Toggle"}]},"id":"d3a63c97-df71-4d8c-a729-888e7733eb4c","type":"WidgetBox"},{"attributes":{},"id":"e013c09d-a063-403e-8c36-4c77e98c2829","type":"BasicTicker"},{"attributes":{"callback":null},"id":"fb17382d-9031-4bfd-84a4-8e8937f47b6d","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ffef386-4c16-4faa-a7cb-523d63dda200","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"0c5b6a17-70cb-43c7-9747-c1af019feb90","subtype":"Figure","type":"Plot"},"ticker":{"id":"e013c09d-a063-403e-8c36-4c77e98c2829","type":"BasicTicker"}},"id":"a58ae7aa-e2f9-4c75-83a1-5bb5a3ce3030","type":"Grid"},{"attributes":{"children":[{"id":"d3a63c97-df71-4d8c-a729-888e7733eb4c","type":"WidgetBox"},{"id":"4a79af51-51cd-4a16-9e48-45f84efc6441","type":"WidgetBox"}]},"id":"4bf177e3-36f1-4a41-9f0a-4d32a1345b9e","type":"Row"},{"attributes":{"callback":null},"id":"9d13dd03-5585-4cce-983f-172206f63b90","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb04e95d-6369-4bba-9cb5-1b0aebc026cf","type":"Line"},{"attributes":{"children":[{"id":"0d11027e-903c-42f1-b175-e82ea1367cf7","type":"Row"},{"id":"4bf177e3-36f1-4a41-9f0a-4d32a1345b9e","type":"Row"}]},"id":"5b94aba1-04cb-4882-b3ee-371736adf164","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"0bf5bfc4-1ee7-47e7-8984-06a4c910ebc8","type":"ColumnDataSource"},{"attributes":{},"id":"958b16da-8ddb-41e8-885b-314c3195a5bc","type":"BasicTickFormatter"},{"attributes":{"button_type":"success","callback":{"id":"b2058ec0-0ebd-4913-bf14-f8e0f4b93367","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"c67a994b-7689-49b9-9926-d664417290af","type":"Toggle"},{"attributes":{"args":{"object":{"id":"bb417b4e-d0c1-4567-a963-d9b8ff748529","type":"BoxAnnotation"},"toggle":{"id":"d68b25d3-136b-4d79-8541-485407888f36","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"402d257f-a1e2-4820-8ad1-8efa18bbf4aa","type":"CustomJS"}],"root_ids":["5b94aba1-04cb-4882-b3ee-371736adf164"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"ef2aefb6-9776-4d82-b103-a65cb0ae1bb7","elementid":"c0d442ba-e45b-4445-8c0e-5990ffa6b4d3","modelid":"5b94aba1-04cb-4882-b3ee-371736adf164"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
