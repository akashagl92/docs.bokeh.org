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
      };var element = document.getElementById("42269f27-e50d-4d5c-888b-b7fa48679b9e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '42269f27-e50d-4d5c-888b-b7fa48679b9e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"02cdc389-48b6-49b9-b663-cfb17fea57c2":{"roots":{"references":[{"attributes":{"plot":{"id":"e886737a-28c1-4a21-b726-0578f9e7afea","subtype":"Figure","type":"Plot"},"ticker":{"id":"44431d84-6aa6-4e24-81d1-71e911919ea1","type":"BasicTicker"}},"id":"ec326497-4a2e-423c-bd29-77a1d335f2b6","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"c1943717-2bce-463d-9d44-5252c35c737b","type":"BoxSelectTool"},{"id":"732748e7-e617-4e62-a176-2af736843c3d","type":"HoverTool"},{"id":"5f8812a4-7e51-4a68-b1fc-ddecfa6dbd90","type":"ResetTool"}]},"id":"066260d9-36de-4a14-898e-391de494eec2","type":"Toolbar"},{"attributes":{"formatter":{"id":"2844acdb-6456-43d7-b1a3-842f4cb38fc0","type":"BasicTickFormatter"},"plot":{"id":"e886737a-28c1-4a21-b726-0578f9e7afea","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e685f08-7acd-40d9-a62c-21a3224447f1","type":"BasicTicker"}},"id":"6f7063c5-d3d9-43ae-be65-9bbc06dab8d3","type":"LinearAxis"},{"attributes":{},"id":"2844acdb-6456-43d7-b1a3-842f4cb38fc0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"27805ba9-5d0d-411f-9f9c-b1f8e08639d9","type":"BoxAnnotation"}},"id":"c1943717-2bce-463d-9d44-5252c35c737b","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"e886737a-28c1-4a21-b726-0578f9e7afea","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e685f08-7acd-40d9-a62c-21a3224447f1","type":"BasicTicker"}},"id":"0cb8dd66-8d13-460e-97bb-54cdf62929d1","type":"Grid"},{"attributes":{},"id":"5834f757-56e5-49c0-988f-69f9f9c3c3d6","type":"BasicTickFormatter"},{"attributes":{},"id":"44431d84-6aa6-4e24-81d1-71e911919ea1","type":"BasicTicker"},{"attributes":{},"id":"3c6ad632-a7eb-4252-99bd-ed8cf2a6fd7b","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"62bbe128-968e-4431-8599-f1e2474a81dc","type":"BoxSelectTool"},{"id":"286e92bd-523a-467e-8319-00520142bfd9","type":"HoverTool"},{"id":"509d6cce-87c6-42f5-9b1f-d8726dccbc8c","type":"ResetTool"}]},"id":"0573a00c-7eab-4878-b20e-4d07cb6f34d3","type":"Toolbar"},{"attributes":{},"id":"509d6cce-87c6-42f5-9b1f-d8726dccbc8c","type":"ResetTool"},{"attributes":{"callback":null,"renderers":"auto"},"id":"286e92bd-523a-467e-8319-00520142bfd9","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea6260fd-0107-4ce5-b7a9-445b7d05bf75","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"7d0ac9c9-4d82-4aac-8965-53dc3318bba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"685af2cd-0645-4b58-b81d-f37fb6e109ae","type":"BasicTicker"}},"id":"09e511b8-e2c4-43c8-891f-840d66301018","type":"Grid"},{"attributes":{},"id":"5f8812a4-7e51-4a68-b1fc-ddecfa6dbd90","type":"ResetTool"},{"attributes":{"source":{"id":"9dd65b14-e933-4d65-9336-886ccdbfd653","type":"ColumnDataSource"}},"id":"8c9b1464-807a-4f1d-ad20-bd69327d0db2","type":"CDSView"},{"attributes":{"children":[{"id":"a34b9bf2-db9c-43fa-8981-8273e557d421","type":"ToolbarBox"},{"id":"789b323c-5783-445c-9b6e-b27cc59a079c","type":"Column"}]},"id":"52b2a0c8-d6f6-47dc-a88d-036041e9c014","type":"Column"},{"attributes":{"children":[{"id":"ff3bfc02-f24d-4ee0-81a8-b05373e98678","type":"Row"}]},"id":"789b323c-5783-445c-9b6e-b27cc59a079c","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"972e65b4-d39b-4e7d-a3bb-6b940d842377","type":"BoxAnnotation"}},"id":"62bbe128-968e-4431-8599-f1e2474a81dc","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"9dd65b14-e933-4d65-9336-886ccdbfd653","type":"ColumnDataSource"},"glyph":{"id":"ea6260fd-0107-4ce5-b7a9-445b7d05bf75","type":"Circle"},"hover_glyph":{"id":"160b2e2d-90bd-44f3-9745-99c87fa1cf73","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"df4b9cd5-097f-4c28-8919-26d20ead5575","type":"Circle"},"selection_glyph":null,"view":{"id":"cd703077-647f-4944-b324-5cb7f939d86f","type":"CDSView"}},"id":"22188d0e-74ef-418c-b7de-711544ac9903","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"332d176b-519f-4282-bd27-47f6d7a0a299","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9dd65b14-e933-4d65-9336-886ccdbfd653","type":"ColumnDataSource"},"glyph":{"id":"a9f8b52e-f535-4099-9a9d-fd6ea8cea002","type":"Circle"},"hover_glyph":{"id":"0b244156-2f24-472d-9743-e44b5ed75ddd","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"89d02d50-b454-4443-9502-91ff5436623a","type":"Circle"},"selection_glyph":null,"view":{"id":"8c9b1464-807a-4f1d-ad20-bd69327d0db2","type":"CDSView"}},"id":"5f95a3e4-7122-47d3-a4fd-f224b31e9bbe","type":"GlyphRenderer"},{"attributes":{},"id":"ba428435-a6d3-4b1d-a1dd-51faed26182c","type":"LinearScale"},{"attributes":{"below":[{"id":"0fc43517-b37b-4c73-a0c2-099f55ad8f19","type":"LinearAxis"}],"left":[{"id":"6f7063c5-d3d9-43ae-be65-9bbc06dab8d3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0fc43517-b37b-4c73-a0c2-099f55ad8f19","type":"LinearAxis"},{"id":"ec326497-4a2e-423c-bd29-77a1d335f2b6","type":"Grid"},{"id":"6f7063c5-d3d9-43ae-be65-9bbc06dab8d3","type":"LinearAxis"},{"id":"0cb8dd66-8d13-460e-97bb-54cdf62929d1","type":"Grid"},{"id":"27805ba9-5d0d-411f-9f9c-b1f8e08639d9","type":"BoxAnnotation"},{"id":"5f95a3e4-7122-47d3-a4fd-f224b31e9bbe","type":"GlyphRenderer"}],"title":{"id":"d93427b7-732a-4798-90c7-f0f5155ff977","type":"Title"},"toolbar":{"id":"066260d9-36de-4a14-898e-391de494eec2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"332d176b-519f-4282-bd27-47f6d7a0a299","type":"DataRange1d"},"x_scale":{"id":"a4051ff0-4472-4b68-94f7-cf110cefd708","type":"LinearScale"},"y_range":{"id":"1aa552a6-fbfc-4078-be05-8d42f58c52a1","type":"DataRange1d"},"y_scale":{"id":"3c6ad632-a7eb-4252-99bd-ed8cf2a6fd7b","type":"LinearScale"}},"id":"e886737a-28c1-4a21-b726-0578f9e7afea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"c61cd4e7-1095-4292-8da6-16f76c45db02","type":"Selection"},"selection_policy":{"id":"4cd7d10d-e458-4138-a6d1-3a76bb91720e","type":"UnionRenderers"}},"id":"9dd65b14-e933-4d65-9336-886ccdbfd653","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"df4b9cd5-097f-4c28-8919-26d20ead5575","type":"Circle"},{"attributes":{"formatter":{"id":"39274639-1e09-44c1-9010-5944a1e11b58","type":"BasicTickFormatter"},"plot":{"id":"7d0ac9c9-4d82-4aac-8965-53dc3318bba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"29b68622-9510-4780-96ff-3460974b1247","type":"BasicTicker"}},"id":"5ffc8c3d-036e-4d88-8ded-c571ebb47886","type":"LinearAxis"},{"attributes":{"children":[{"id":"e886737a-28c1-4a21-b726-0578f9e7afea","subtype":"Figure","type":"Plot"},{"id":"7d0ac9c9-4d82-4aac-8965-53dc3318bba0","subtype":"Figure","type":"Plot"}]},"id":"ff3bfc02-f24d-4ee0-81a8-b05373e98678","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27805ba9-5d0d-411f-9f9c-b1f8e08639d9","type":"BoxAnnotation"},{"attributes":{},"id":"345f44fd-5e26-4153-a7ed-c4d30563dbb7","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"629c8e59-fd1e-4f30-971e-eeb061ddb510","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"a34b9bf2-db9c-43fa-8981-8273e557d421","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"1aa552a6-fbfc-4078-be05-8d42f58c52a1","type":"DataRange1d"},{"attributes":{},"id":"c61cd4e7-1095-4292-8da6-16f76c45db02","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"89d02d50-b454-4443-9502-91ff5436623a","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"160b2e2d-90bd-44f3-9745-99c87fa1cf73","type":"Circle"},{"attributes":{"tools":[{"id":"c1943717-2bce-463d-9d44-5252c35c737b","type":"BoxSelectTool"},{"id":"732748e7-e617-4e62-a176-2af736843c3d","type":"HoverTool"},{"id":"5f8812a4-7e51-4a68-b1fc-ddecfa6dbd90","type":"ResetTool"},{"id":"62bbe128-968e-4431-8599-f1e2474a81dc","type":"BoxSelectTool"},{"id":"286e92bd-523a-467e-8319-00520142bfd9","type":"HoverTool"},{"id":"509d6cce-87c6-42f5-9b1f-d8726dccbc8c","type":"ResetTool"}]},"id":"629c8e59-fd1e-4f30-971e-eeb061ddb510","type":"ProxyToolbar"},{"attributes":{},"id":"685af2cd-0645-4b58-b81d-f37fb6e109ae","type":"BasicTicker"},{"attributes":{},"id":"29b68622-9510-4780-96ff-3460974b1247","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"1518acfe-1122-4ccd-a234-78b75252ba9d","type":"Title"},{"attributes":{"callback":null,"renderers":"auto"},"id":"732748e7-e617-4e62-a176-2af736843c3d","type":"HoverTool"},{"attributes":{},"id":"4cd7d10d-e458-4138-a6d1-3a76bb91720e","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b244156-2f24-472d-9743-e44b5ed75ddd","type":"Circle"},{"attributes":{},"id":"4ae15da4-2e04-4cec-aff0-e8975e76759a","type":"LinearScale"},{"attributes":{"below":[{"id":"5ffc8c3d-036e-4d88-8ded-c571ebb47886","type":"LinearAxis"}],"left":[{"id":"39fb76a0-18ad-46cb-a21a-acb747c1bfb6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5ffc8c3d-036e-4d88-8ded-c571ebb47886","type":"LinearAxis"},{"id":"f4566ac7-c1b7-4971-bfe8-86f687be0073","type":"Grid"},{"id":"39fb76a0-18ad-46cb-a21a-acb747c1bfb6","type":"LinearAxis"},{"id":"09e511b8-e2c4-43c8-891f-840d66301018","type":"Grid"},{"id":"972e65b4-d39b-4e7d-a3bb-6b940d842377","type":"BoxAnnotation"},{"id":"22188d0e-74ef-418c-b7de-711544ac9903","type":"GlyphRenderer"}],"title":{"id":"1518acfe-1122-4ccd-a234-78b75252ba9d","type":"Title"},"toolbar":{"id":"0573a00c-7eab-4878-b20e-4d07cb6f34d3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"332d176b-519f-4282-bd27-47f6d7a0a299","type":"DataRange1d"},"x_scale":{"id":"ba428435-a6d3-4b1d-a1dd-51faed26182c","type":"LinearScale"},"y_range":{"id":"1aa552a6-fbfc-4078-be05-8d42f58c52a1","type":"DataRange1d"},"y_scale":{"id":"4ae15da4-2e04-4cec-aff0-e8975e76759a","type":"LinearScale"}},"id":"7d0ac9c9-4d82-4aac-8965-53dc3318bba0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"345f44fd-5e26-4153-a7ed-c4d30563dbb7","type":"BasicTickFormatter"},"plot":{"id":"e886737a-28c1-4a21-b726-0578f9e7afea","subtype":"Figure","type":"Plot"},"ticker":{"id":"44431d84-6aa6-4e24-81d1-71e911919ea1","type":"BasicTicker"}},"id":"0fc43517-b37b-4c73-a0c2-099f55ad8f19","type":"LinearAxis"},{"attributes":{},"id":"39274639-1e09-44c1-9010-5944a1e11b58","type":"BasicTickFormatter"},{"attributes":{},"id":"a4051ff0-4472-4b68-94f7-cf110cefd708","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"972e65b4-d39b-4e7d-a3bb-6b940d842377","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"d93427b7-732a-4798-90c7-f0f5155ff977","type":"Title"},{"attributes":{"filters":[{"id":"3cc0895d-18b8-410d-9505-caeb12844b81","type":"BooleanFilter"}],"source":{"id":"9dd65b14-e933-4d65-9336-886ccdbfd653","type":"ColumnDataSource"}},"id":"cd703077-647f-4944-b324-5cb7f939d86f","type":"CDSView"},{"attributes":{},"id":"4e685f08-7acd-40d9-a62c-21a3224447f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"7d0ac9c9-4d82-4aac-8965-53dc3318bba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"29b68622-9510-4780-96ff-3460974b1247","type":"BasicTicker"}},"id":"f4566ac7-c1b7-4971-bfe8-86f687be0073","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9f8b52e-f535-4099-9a9d-fd6ea8cea002","type":"Circle"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"3cc0895d-18b8-410d-9505-caeb12844b81","type":"BooleanFilter"},{"attributes":{"formatter":{"id":"5834f757-56e5-49c0-988f-69f9f9c3c3d6","type":"BasicTickFormatter"},"plot":{"id":"7d0ac9c9-4d82-4aac-8965-53dc3318bba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"685af2cd-0645-4b58-b81d-f37fb6e109ae","type":"BasicTicker"}},"id":"39fb76a0-18ad-46cb-a21a-acb747c1bfb6","type":"LinearAxis"}],"root_ids":["52b2a0c8-d6f6-47dc-a88d-036041e9c014"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"02cdc389-48b6-49b9-b663-cfb17fea57c2","roots":{"52b2a0c8-d6f6-47dc-a88d-036041e9c014":"42269f27-e50d-4d5c-888b-b7fa48679b9e"}}];
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