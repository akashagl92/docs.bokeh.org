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
      };var element = document.getElementById("5078ca21-2f1b-460b-b55e-905cca6e38d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5078ca21-2f1b-460b-b55e-905cca6e38d7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3b038780-8ad4-42a2-9dc0-5aabd2405067":{"roots":{"references":[{"attributes":{},"id":"2208bc5a-f5c9-42a2-a8e3-2b86f99c3c93","type":"BasicTickFormatter"},{"attributes":{},"id":"1acbd135-d716-4ce7-ba73-5263d79680ea","type":"Selection"},{"attributes":{},"id":"464b3b4b-124f-495b-93e4-bb495989cf6b","type":"BasicTicker"},{"attributes":{},"id":"be76fadc-9c75-4b63-ad1b-d2864622349a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"06bdb7a1-b225-4d3a-ad17-609f9f142625","type":"ColumnDataSource"},"glyph":{"id":"a0166844-17ef-486e-9fd1-98d61e765b5c","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3ad81ad-6028-4564-a3cd-2123b2c94a46","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"ebfae1e8-3585-4fe0-a4d3-6efc06049c11","type":"CDSView"}},"id":"148d9025-2aec-441d-8389-b8ae440c2535","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"59b62893-c7bf-44f2-a067-5b211eff022c","subtype":"Figure","type":"Plot"},"ticker":{"id":"464b3b4b-124f-495b-93e4-bb495989cf6b","type":"BasicTicker"}},"id":"0198082d-3391-4c88-b8ef-57ad156e3de6","type":"Grid"},{"attributes":{},"id":"2cf23c17-ac9b-4671-8ad2-4b2624eb5a3a","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"2208bc5a-f5c9-42a2-a8e3-2b86f99c3c93","type":"BasicTickFormatter"},"plot":{"id":"59b62893-c7bf-44f2-a067-5b211eff022c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4ff5f8a-aa23-492f-bfbb-e470e3d95eb5","type":"BasicTicker"}},"id":"45bce9a3-dd54-41a0-935d-e6575646d7ed","type":"LinearAxis"},{"attributes":{},"id":"f4ff5f8a-aa23-492f-bfbb-e470e3d95eb5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"59b62893-c7bf-44f2-a067-5b211eff022c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4ff5f8a-aa23-492f-bfbb-e470e3d95eb5","type":"BasicTicker"}},"id":"b85af22f-3dbb-41bb-8b5a-f4d0fe2ee2bb","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0166844-17ef-486e-9fd1-98d61e765b5c","type":"DiamondCross"},{"attributes":{"source":{"id":"06bdb7a1-b225-4d3a-ad17-609f9f142625","type":"ColumnDataSource"}},"id":"ebfae1e8-3585-4fe0-a4d3-6efc06049c11","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f3ad81ad-6028-4564-a3cd-2123b2c94a46","type":"DiamondCross"},{"attributes":{"plot":null,"text":""},"id":"452df9fb-b140-4b26-9bf3-3a13e34888d8","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"1acbd135-d716-4ce7-ba73-5263d79680ea","type":"Selection"},"selection_policy":{"id":"2cf23c17-ac9b-4671-8ad2-4b2624eb5a3a","type":"UnionRenderers"}},"id":"06bdb7a1-b225-4d3a-ad17-609f9f142625","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cccc4374-b692-4099-97a3-94ee4d4bf843","type":"BoxAnnotation"},{"attributes":{},"id":"a30caef9-8138-49fe-8b62-2dd57535ed29","type":"LinearScale"},{"attributes":{},"id":"33ae72ad-90c1-4366-aa3e-2b5a04f79a7a","type":"PanTool"},{"attributes":{"below":[{"id":"e4e85837-3dda-442e-a7ae-bc46a9d550d5","type":"LinearAxis"}],"left":[{"id":"45bce9a3-dd54-41a0-935d-e6575646d7ed","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e4e85837-3dda-442e-a7ae-bc46a9d550d5","type":"LinearAxis"},{"id":"0198082d-3391-4c88-b8ef-57ad156e3de6","type":"Grid"},{"id":"45bce9a3-dd54-41a0-935d-e6575646d7ed","type":"LinearAxis"},{"id":"b85af22f-3dbb-41bb-8b5a-f4d0fe2ee2bb","type":"Grid"},{"id":"cccc4374-b692-4099-97a3-94ee4d4bf843","type":"BoxAnnotation"},{"id":"148d9025-2aec-441d-8389-b8ae440c2535","type":"GlyphRenderer"}],"title":{"id":"452df9fb-b140-4b26-9bf3-3a13e34888d8","type":"Title"},"toolbar":{"id":"9988bd58-fc6a-448c-af7f-030efe9f63fa","type":"Toolbar"},"x_range":{"id":"4be74b29-8c34-4c7a-9c83-dd2d3b7f2601","type":"DataRange1d"},"x_scale":{"id":"a30caef9-8138-49fe-8b62-2dd57535ed29","type":"LinearScale"},"y_range":{"id":"17ddef04-5439-4b78-ba23-18a13ee77246","type":"DataRange1d"},"y_scale":{"id":"2cab927d-315e-4436-a6a5-10019c27ef14","type":"LinearScale"}},"id":"59b62893-c7bf-44f2-a067-5b211eff022c","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33ae72ad-90c1-4366-aa3e-2b5a04f79a7a","type":"PanTool"},{"id":"685ad748-3e7f-4c96-b91a-972b48905947","type":"WheelZoomTool"},{"id":"884d8309-f466-463a-a60d-1a0112d352f4","type":"BoxZoomTool"},{"id":"f0607ee7-abcd-47e5-8c37-354cb88905d2","type":"SaveTool"},{"id":"378addc8-a513-4ce2-a376-473b0469b20a","type":"ResetTool"},{"id":"954db9ed-9c23-4186-b815-f135e29722c5","type":"HelpTool"}]},"id":"9988bd58-fc6a-448c-af7f-030efe9f63fa","type":"Toolbar"},{"attributes":{},"id":"685ad748-3e7f-4c96-b91a-972b48905947","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"4be74b29-8c34-4c7a-9c83-dd2d3b7f2601","type":"DataRange1d"},{"attributes":{"overlay":{"id":"cccc4374-b692-4099-97a3-94ee4d4bf843","type":"BoxAnnotation"}},"id":"884d8309-f466-463a-a60d-1a0112d352f4","type":"BoxZoomTool"},{"attributes":{},"id":"2cab927d-315e-4436-a6a5-10019c27ef14","type":"LinearScale"},{"attributes":{},"id":"f0607ee7-abcd-47e5-8c37-354cb88905d2","type":"SaveTool"},{"attributes":{"formatter":{"id":"be76fadc-9c75-4b63-ad1b-d2864622349a","type":"BasicTickFormatter"},"plot":{"id":"59b62893-c7bf-44f2-a067-5b211eff022c","subtype":"Figure","type":"Plot"},"ticker":{"id":"464b3b4b-124f-495b-93e4-bb495989cf6b","type":"BasicTicker"}},"id":"e4e85837-3dda-442e-a7ae-bc46a9d550d5","type":"LinearAxis"},{"attributes":{},"id":"378addc8-a513-4ce2-a376-473b0469b20a","type":"ResetTool"},{"attributes":{},"id":"954db9ed-9c23-4186-b815-f135e29722c5","type":"HelpTool"},{"attributes":{"callback":null},"id":"17ddef04-5439-4b78-ba23-18a13ee77246","type":"DataRange1d"}],"root_ids":["59b62893-c7bf-44f2-a067-5b211eff022c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3b038780-8ad4-42a2-9dc0-5aabd2405067","roots":{"59b62893-c7bf-44f2-a067-5b211eff022c":"5078ca21-2f1b-460b-b55e-905cca6e38d7"}}];
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