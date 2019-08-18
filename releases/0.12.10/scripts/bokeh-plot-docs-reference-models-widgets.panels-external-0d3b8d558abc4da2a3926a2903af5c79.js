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
      };var element = document.getElementById("422093d8-c405-46de-b03d-c670b62c903b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '422093d8-c405-46de-b03d-c670b62c903b' but no matching script tag was found. ")
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
                    var docs_json = {"06a2a514-9b79-4382-b6c5-675322015f26":{"roots":{"references":[{"attributes":{},"id":"fc6a871e-6751-4ec9-bb76-d438c4603e09","type":"WheelZoomTool"},{"attributes":{},"id":"0f1a6fe7-beb3-4467-a5ea-7aad83235005","type":"HelpTool"},{"attributes":{},"id":"4becf348-0356-4abc-b2d7-7b3654690308","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4a4755c1-4f2b-4bd9-977f-6a4520480695","type":"ColumnDataSource"},"glyph":{"id":"4048fe48-f0bd-4e9d-a4eb-52d5fd970021","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f1970d8-824c-4e28-adae-df1e6a04a7cd","type":"Circle"},"selection_glyph":null,"view":{"id":"44cc6567-a011-4851-abcf-2e858e3b9f08","type":"CDSView"}},"id":"eb151a80-2588-44c5-a1c4-457e69570a3d","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"def13fe1-915c-479d-823f-4aca0827741a","subtype":"Figure","type":"Plot"},"ticker":{"id":"67de4478-9082-427a-a612-a00bdbbca2e8","type":"BasicTicker"}},"id":"bdd4f1f4-0fa9-484c-93a1-9acca1aa477f","type":"Grid"},{"attributes":{"plot":{"id":"2877def2-e1f8-49e5-bfa2-aefd03e67256","subtype":"Figure","type":"Plot"},"ticker":{"id":"4becf348-0356-4abc-b2d7-7b3654690308","type":"BasicTicker"}},"id":"f040ea6d-9f67-4abd-abb1-1e98b0a626a5","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1ef78b26-ef37-463d-b2f0-f8fd8655b9fb","type":"BoxAnnotation"},{"attributes":{},"id":"67de4478-9082-427a-a612-a00bdbbca2e8","type":"BasicTicker"},{"attributes":{"formatter":{"id":"179dbcad-4147-4f5c-9f31-5bcd7b4497d4","type":"BasicTickFormatter"},"plot":{"id":"def13fe1-915c-479d-823f-4aca0827741a","subtype":"Figure","type":"Plot"},"ticker":{"id":"67de4478-9082-427a-a612-a00bdbbca2e8","type":"BasicTicker"}},"id":"2b87478e-b060-4139-b66e-a1e51ff3a0f2","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4048fe48-f0bd-4e9d-a4eb-52d5fd970021","type":"Circle"},{"attributes":{"child":{"id":"2877def2-e1f8-49e5-bfa2-aefd03e67256","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"7fe7f107-8bfd-4be0-a392-24a1d37bfacd","type":"Panel"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"77bc2a85-1a04-4708-824b-844719e6fd95","type":"ColumnDataSource"},{"attributes":{},"id":"2b4b8da4-b7f1-4b14-8ae1-9556dee52084","type":"PanTool"},{"attributes":{},"id":"b09e1503-4e69-45fb-945f-f9d21ed5022d","type":"HelpTool"},{"attributes":{},"id":"0121128d-bf1f-4b81-8991-04e89247b9b4","type":"ResetTool"},{"attributes":{"formatter":{"id":"253687a7-17a9-4f96-905a-b8558a2be3fb","type":"BasicTickFormatter"},"plot":{"id":"def13fe1-915c-479d-823f-4aca0827741a","subtype":"Figure","type":"Plot"},"ticker":{"id":"932212d2-59ac-49b0-9d31-e6e39f102cb6","type":"BasicTicker"}},"id":"2d5a2c04-b122-4b2f-8a18-a3b74a4c241b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"481578d3-0a28-42f7-bd77-c166bca0f060","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f1970d8-824c-4e28-adae-df1e6a04a7cd","type":"Circle"},{"attributes":{"plot":{"id":"def13fe1-915c-479d-823f-4aca0827741a","subtype":"Figure","type":"Plot"},"ticker":{"id":"932212d2-59ac-49b0-9d31-e6e39f102cb6","type":"BasicTicker"}},"id":"39e3145e-aff5-4c4a-ad61-8e00681c4caf","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12ac4c65-593e-4344-b69d-9cad3d6ba42a","type":"BoxAnnotation"},{"attributes":{},"id":"62612425-729f-4d3b-924b-149ef9762a6f","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fb29afb-6c42-4894-8a40-c1a6db359a09","type":"Line"},{"attributes":{},"id":"0759e424-dea6-491d-a6d9-5edb3e6b6fcd","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"946f392c-4349-4ab4-957a-41e383460613","type":"LinearAxis"}],"left":[{"id":"701cf379-2d0c-4633-a0e2-faf7e451d614","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"946f392c-4349-4ab4-957a-41e383460613","type":"LinearAxis"},{"id":"f040ea6d-9f67-4abd-abb1-1e98b0a626a5","type":"Grid"},{"id":"701cf379-2d0c-4633-a0e2-faf7e451d614","type":"LinearAxis"},{"id":"9cda65bc-5c4c-4556-a72e-f2b3ac34e188","type":"Grid"},{"id":"1ef78b26-ef37-463d-b2f0-f8fd8655b9fb","type":"BoxAnnotation"},{"id":"eb151a80-2588-44c5-a1c4-457e69570a3d","type":"GlyphRenderer"}],"title":{"id":"f9f2d06c-5c76-4ce7-8bb8-d09a83fe08e8","type":"Title"},"toolbar":{"id":"ba28dc90-48e8-4755-8943-c7131dfac950","type":"Toolbar"},"x_range":{"id":"c6bcd287-7ad9-48ef-88ef-2a02a377cb0f","type":"DataRange1d"},"x_scale":{"id":"0b4bf281-bf00-4c3d-8d16-7733d3f51241","type":"LinearScale"},"y_range":{"id":"a89434f1-462e-482c-b357-2a073cdf1479","type":"DataRange1d"},"y_scale":{"id":"d906f575-df72-4205-906c-43457e86d3aa","type":"LinearScale"}},"id":"2877def2-e1f8-49e5-bfa2-aefd03e67256","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0b4bf281-bf00-4c3d-8d16-7733d3f51241","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"4a4755c1-4f2b-4bd9-977f-6a4520480695","type":"ColumnDataSource"},{"attributes":{},"id":"5faf5570-212c-463b-af85-4b2ed4501404","type":"LinearScale"},{"attributes":{},"id":"5ef25011-9ad3-498a-863c-6b3b661583e6","type":"SaveTool"},{"attributes":{"callback":null,"tabs":[{"id":"7fe7f107-8bfd-4be0-a392-24a1d37bfacd","type":"Panel"},{"id":"8164bba5-65e5-4e77-bda7-54cf5869c608","type":"Panel"}]},"id":"16837094-777f-43b9-b7ee-5a964a68612f","type":"Tabs"},{"attributes":{"overlay":{"id":"1ef78b26-ef37-463d-b2f0-f8fd8655b9fb","type":"BoxAnnotation"}},"id":"422bc330-344f-4e48-8df9-e2c693dbd57a","type":"BoxZoomTool"},{"attributes":{},"id":"d906f575-df72-4205-906c-43457e86d3aa","type":"LinearScale"},{"attributes":{"data_source":{"id":"77bc2a85-1a04-4708-824b-844719e6fd95","type":"ColumnDataSource"},"glyph":{"id":"0fb29afb-6c42-4894-8a40-c1a6db359a09","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9471a87-aa6d-4127-8e38-0a63feaca3d9","type":"Line"},"selection_glyph":null,"view":{"id":"7e741aa4-e268-4bd9-bf5f-b146b232b9fe","type":"CDSView"}},"id":"56feb8af-0a9f-43bf-af2a-3608060b6f2e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4a4755c1-4f2b-4bd9-977f-6a4520480695","type":"ColumnDataSource"}},"id":"44cc6567-a011-4851-abcf-2e858e3b9f08","type":"CDSView"},{"attributes":{"callback":null},"id":"61cc86e3-a1ff-400e-8c8a-f228fbdb1db1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9d7e2150-9c68-4f21-a4fa-45411b90891d","type":"BasicTickFormatter"},"plot":{"id":"2877def2-e1f8-49e5-bfa2-aefd03e67256","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1267801-051d-4a01-af60-34d5c7190599","type":"BasicTicker"}},"id":"701cf379-2d0c-4633-a0e2-faf7e451d614","type":"LinearAxis"},{"attributes":{},"id":"932212d2-59ac-49b0-9d31-e6e39f102cb6","type":"BasicTicker"},{"attributes":{},"id":"ba6cb7c2-2ecc-4606-8055-8ba634d42eed","type":"SaveTool"},{"attributes":{"source":{"id":"77bc2a85-1a04-4708-824b-844719e6fd95","type":"ColumnDataSource"}},"id":"7e741aa4-e268-4bd9-bf5f-b146b232b9fe","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"422f2b3c-2239-47c3-a99d-4090375401fa","type":"PanTool"},{"id":"4540542a-964e-4c54-b070-a918d9e37d86","type":"WheelZoomTool"},{"id":"8427bb83-2dfc-4a12-bdde-012ce0f0f911","type":"BoxZoomTool"},{"id":"ba6cb7c2-2ecc-4606-8055-8ba634d42eed","type":"SaveTool"},{"id":"42c46b29-146f-46fa-87a1-0d044d334747","type":"ResetTool"},{"id":"0f1a6fe7-beb3-4467-a5ea-7aad83235005","type":"HelpTool"}]},"id":"9c628076-7aa8-4bd4-bce7-7ba5b9deb636","type":"Toolbar"},{"attributes":{},"id":"179dbcad-4147-4f5c-9f31-5bcd7b4497d4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c6bcd287-7ad9-48ef-88ef-2a02a377cb0f","type":"DataRange1d"},{"attributes":{},"id":"9d7e2150-9c68-4f21-a4fa-45411b90891d","type":"BasicTickFormatter"},{"attributes":{},"id":"253687a7-17a9-4f96-905a-b8558a2be3fb","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2877def2-e1f8-49e5-bfa2-aefd03e67256","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1267801-051d-4a01-af60-34d5c7190599","type":"BasicTicker"}},"id":"9cda65bc-5c4c-4556-a72e-f2b3ac34e188","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"dd7233e6-8911-40e6-9d6d-cf4713221783","type":"Title"},{"attributes":{},"id":"4540542a-964e-4c54-b070-a918d9e37d86","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"12ac4c65-593e-4344-b69d-9cad3d6ba42a","type":"BoxAnnotation"}},"id":"8427bb83-2dfc-4a12-bdde-012ce0f0f911","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2b4b8da4-b7f1-4b14-8ae1-9556dee52084","type":"PanTool"},{"id":"fc6a871e-6751-4ec9-bb76-d438c4603e09","type":"WheelZoomTool"},{"id":"422bc330-344f-4e48-8df9-e2c693dbd57a","type":"BoxZoomTool"},{"id":"5ef25011-9ad3-498a-863c-6b3b661583e6","type":"SaveTool"},{"id":"0121128d-bf1f-4b81-8991-04e89247b9b4","type":"ResetTool"},{"id":"b09e1503-4e69-45fb-945f-f9d21ed5022d","type":"HelpTool"}]},"id":"ba28dc90-48e8-4755-8943-c7131dfac950","type":"Toolbar"},{"attributes":{},"id":"422f2b3c-2239-47c3-a99d-4090375401fa","type":"PanTool"},{"attributes":{"child":{"id":"def13fe1-915c-479d-823f-4aca0827741a","subtype":"Figure","type":"Plot"},"title":"line"},"id":"8164bba5-65e5-4e77-bda7-54cf5869c608","type":"Panel"},{"attributes":{},"id":"b1267801-051d-4a01-af60-34d5c7190599","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0759e424-dea6-491d-a6d9-5edb3e6b6fcd","type":"BasicTickFormatter"},"plot":{"id":"2877def2-e1f8-49e5-bfa2-aefd03e67256","subtype":"Figure","type":"Plot"},"ticker":{"id":"4becf348-0356-4abc-b2d7-7b3654690308","type":"BasicTicker"}},"id":"946f392c-4349-4ab4-957a-41e383460613","type":"LinearAxis"},{"attributes":{},"id":"42c46b29-146f-46fa-87a1-0d044d334747","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"f9f2d06c-5c76-4ce7-8bb8-d09a83fe08e8","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9471a87-aa6d-4127-8e38-0a63feaca3d9","type":"Line"},{"attributes":{"below":[{"id":"2d5a2c04-b122-4b2f-8a18-a3b74a4c241b","type":"LinearAxis"}],"left":[{"id":"2b87478e-b060-4139-b66e-a1e51ff3a0f2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2d5a2c04-b122-4b2f-8a18-a3b74a4c241b","type":"LinearAxis"},{"id":"39e3145e-aff5-4c4a-ad61-8e00681c4caf","type":"Grid"},{"id":"2b87478e-b060-4139-b66e-a1e51ff3a0f2","type":"LinearAxis"},{"id":"bdd4f1f4-0fa9-484c-93a1-9acca1aa477f","type":"Grid"},{"id":"12ac4c65-593e-4344-b69d-9cad3d6ba42a","type":"BoxAnnotation"},{"id":"56feb8af-0a9f-43bf-af2a-3608060b6f2e","type":"GlyphRenderer"}],"title":{"id":"dd7233e6-8911-40e6-9d6d-cf4713221783","type":"Title"},"toolbar":{"id":"9c628076-7aa8-4bd4-bce7-7ba5b9deb636","type":"Toolbar"},"x_range":{"id":"61cc86e3-a1ff-400e-8c8a-f228fbdb1db1","type":"DataRange1d"},"x_scale":{"id":"62612425-729f-4d3b-924b-149ef9762a6f","type":"LinearScale"},"y_range":{"id":"481578d3-0a28-42f7-bd77-c166bca0f060","type":"DataRange1d"},"y_scale":{"id":"5faf5570-212c-463b-af85-4b2ed4501404","type":"LinearScale"}},"id":"def13fe1-915c-479d-823f-4aca0827741a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"a89434f1-462e-482c-b357-2a073cdf1479","type":"DataRange1d"}],"root_ids":["16837094-777f-43b9-b7ee-5a964a68612f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"06a2a514-9b79-4382-b6c5-675322015f26","elementid":"422093d8-c405-46de-b03d-c670b62c903b","modelid":"16837094-777f-43b9-b7ee-5a964a68612f"}];
                
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
