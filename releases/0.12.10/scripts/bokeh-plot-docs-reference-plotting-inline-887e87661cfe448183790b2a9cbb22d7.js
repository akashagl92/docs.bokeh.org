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
      };var element = document.getElementById("79e3135c-4695-4e5f-8928-7c5985bce8b7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79e3135c-4695-4e5f-8928-7c5985bce8b7' but no matching script tag was found. ")
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
                    var docs_json = {"dbaa2ed5-20e3-4d2c-9cb1-c66fa2b49f69":{"roots":{"references":[{"attributes":{"formatter":{"id":"0ca0fb0e-fbc9-45a0-935b-a78508403108","type":"BasicTickFormatter"},"plot":{"id":"3c4ea144-f993-43e6-86b9-3a63b025a1f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"347f6378-60d8-4513-892e-a1bd371d94c8","type":"BasicTicker"}},"id":"86c2f014-87a6-4070-be6a-9536e6caa0f9","type":"LinearAxis"},{"attributes":{},"id":"881fd77d-efd0-4ccd-b418-eb90025e4781","type":"SaveTool"},{"attributes":{"callback":null},"id":"aa1e00d5-141c-47e0-ab91-f58540a1ad00","type":"DataRange1d"},{"attributes":{},"id":"f520056d-7e53-4750-9253-a1d3206411f9","type":"ResetTool"},{"attributes":{},"id":"b4e0bbe1-a327-4433-b1a4-ed137fc06c6b","type":"BasicTicker"},{"attributes":{},"id":"1bd5c0eb-aa90-4935-94f9-a3a0550de4df","type":"HelpTool"},{"attributes":{},"id":"cc6aed1c-880d-4f8d-aa3a-304ec8b4032a","type":"LinearScale"},{"attributes":{},"id":"a8847b73-dccc-4046-931b-97436e379a57","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"6febc9e0-9bca-4322-900f-c4e88cd150bd","type":"Title"},{"attributes":{"plot":{"id":"3c4ea144-f993-43e6-86b9-3a63b025a1f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4e0bbe1-a327-4433-b1a4-ed137fc06c6b","type":"BasicTicker"}},"id":"c590f3da-eed7-4032-8f92-e3d9db85e8a7","type":"Grid"},{"attributes":{},"id":"aab1a6c6-9f2f-4299-904b-845c8228d23a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"aab1a6c6-9f2f-4299-904b-845c8228d23a","type":"BasicTickFormatter"},"plot":{"id":"3c4ea144-f993-43e6-86b9-3a63b025a1f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4e0bbe1-a327-4433-b1a4-ed137fc06c6b","type":"BasicTicker"}},"id":"1741329a-da66-427b-b2f0-39afb411288d","type":"LinearAxis"},{"attributes":{},"id":"347f6378-60d8-4513-892e-a1bd371d94c8","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3c4ea144-f993-43e6-86b9-3a63b025a1f2","subtype":"Figure","type":"Plot"},"ticker":{"id":"347f6378-60d8-4513-892e-a1bd371d94c8","type":"BasicTicker"}},"id":"0ab8a009-e28d-422f-a339-d9672fde1260","type":"Grid"},{"attributes":{},"id":"0ca0fb0e-fbc9-45a0-935b-a78508403108","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"368a3c4f-43e0-4c8e-8aac-7334448b6b8b","type":"Wedge"},{"attributes":{"data_source":{"id":"06524ff2-b3ca-4ab3-b44a-73e0c0bf346f","type":"ColumnDataSource"},"glyph":{"id":"368a3c4f-43e0-4c8e-8aac-7334448b6b8b","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"af025808-bd2e-45e7-b6bc-d4741a05fb00","type":"Wedge"},"selection_glyph":null,"view":{"id":"0c262a77-0192-49c3-b4fb-c5a5e04abb21","type":"CDSView"}},"id":"caf5d8e8-96b3-4a06-bff5-e92ee006be0f","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"87d79672-0dd8-4f81-9713-76bfad0eaeec","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1741329a-da66-427b-b2f0-39afb411288d","type":"LinearAxis"}],"left":[{"id":"86c2f014-87a6-4070-be6a-9536e6caa0f9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1741329a-da66-427b-b2f0-39afb411288d","type":"LinearAxis"},{"id":"c590f3da-eed7-4032-8f92-e3d9db85e8a7","type":"Grid"},{"id":"86c2f014-87a6-4070-be6a-9536e6caa0f9","type":"LinearAxis"},{"id":"0ab8a009-e28d-422f-a339-d9672fde1260","type":"Grid"},{"id":"87d79672-0dd8-4f81-9713-76bfad0eaeec","type":"BoxAnnotation"},{"id":"caf5d8e8-96b3-4a06-bff5-e92ee006be0f","type":"GlyphRenderer"}],"title":{"id":"6febc9e0-9bca-4322-900f-c4e88cd150bd","type":"Title"},"toolbar":{"id":"a557ff68-5675-4f3c-8c5c-6c1e3646a492","type":"Toolbar"},"x_range":{"id":"693d74bd-25a9-4834-826f-9113ea9a3c26","type":"DataRange1d"},"x_scale":{"id":"cc6aed1c-880d-4f8d-aa3a-304ec8b4032a","type":"LinearScale"},"y_range":{"id":"aa1e00d5-141c-47e0-ab91-f58540a1ad00","type":"DataRange1d"},"y_scale":{"id":"a8847b73-dccc-4046-931b-97436e379a57","type":"LinearScale"}},"id":"3c4ea144-f993-43e6-86b9-3a63b025a1f2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"06524ff2-b3ca-4ab3-b44a-73e0c0bf346f","type":"ColumnDataSource"},{"attributes":{},"id":"3b4907d6-15b9-4b78-952d-b15e86372e88","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3b4907d6-15b9-4b78-952d-b15e86372e88","type":"PanTool"},{"id":"daa84848-ca3a-4081-ad81-5dcdf2d06f74","type":"WheelZoomTool"},{"id":"715f6540-7549-45a8-a4fa-4e3a81f7902d","type":"BoxZoomTool"},{"id":"881fd77d-efd0-4ccd-b418-eb90025e4781","type":"SaveTool"},{"id":"f520056d-7e53-4750-9253-a1d3206411f9","type":"ResetTool"},{"id":"1bd5c0eb-aa90-4935-94f9-a3a0550de4df","type":"HelpTool"}]},"id":"a557ff68-5675-4f3c-8c5c-6c1e3646a492","type":"Toolbar"},{"attributes":{"source":{"id":"06524ff2-b3ca-4ab3-b44a-73e0c0bf346f","type":"ColumnDataSource"}},"id":"0c262a77-0192-49c3-b4fb-c5a5e04abb21","type":"CDSView"},{"attributes":{"callback":null},"id":"693d74bd-25a9-4834-826f-9113ea9a3c26","type":"DataRange1d"},{"attributes":{},"id":"daa84848-ca3a-4081-ad81-5dcdf2d06f74","type":"WheelZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"af025808-bd2e-45e7-b6bc-d4741a05fb00","type":"Wedge"},{"attributes":{"overlay":{"id":"87d79672-0dd8-4f81-9713-76bfad0eaeec","type":"BoxAnnotation"}},"id":"715f6540-7549-45a8-a4fa-4e3a81f7902d","type":"BoxZoomTool"}],"root_ids":["3c4ea144-f993-43e6-86b9-3a63b025a1f2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"dbaa2ed5-20e3-4d2c-9cb1-c66fa2b49f69","elementid":"79e3135c-4695-4e5f-8928-7c5985bce8b7","modelid":"3c4ea144-f993-43e6-86b9-3a63b025a1f2"}];
                
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
