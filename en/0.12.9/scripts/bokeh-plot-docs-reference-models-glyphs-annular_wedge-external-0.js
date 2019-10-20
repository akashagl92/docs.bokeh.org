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
      };var element = document.getElementById("49e35ca7-d12e-4a35-83d0-38e66a651c98");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '49e35ca7-d12e-4a35-83d0-38e66a651c98' but no matching script tag was found. ")
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
                    var docs_json = {"eda21194-3068-4b22-93b2-0be715832bcf":{"roots":{"references":[{"attributes":{},"id":"df8f22fe-46a8-4cec-973b-c1c27bafa88b","type":"LinearScale"},{"attributes":{"callback":null},"id":"b83bbbbb-5cfa-4dcd-a54e-75585902bb38","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"04521cb6-c4cd-49ee-851a-ac348fd663ec","type":"Plot"},"ticker":{"id":"5598811f-6c77-40b0-892c-ebaf20aa8493","type":"BasicTicker"}},"id":"39d15195-ba57-4d4c-96ff-676d6b3d71b5","type":"Grid"},{"attributes":{},"id":"5598811f-6c77-40b0-892c-ebaf20aa8493","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4472072f-07be-4344-9621-a95d217f008e","type":"Toolbar"},{"attributes":{},"id":"74a79dcb-dde1-4510-aa95-c472840a7c40","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"082dcb41-6e7e-488a-a578-68126775537d","type":"AnnularWedge"},{"attributes":{"callback":null},"id":"ac755170-9eab-41d8-97cc-55f9cd74b58d","type":"DataRange1d"},{"attributes":{"source":{"id":"019e18f5-1047-4192-9ada-45586527f590","type":"ColumnDataSource"}},"id":"72f67efe-7c91-494d-a344-202e2ceb3dcb","type":"CDSView"},{"attributes":{},"id":"be40777a-3326-4ea4-ad79-bc314133eaa7","type":"BasicTickFormatter"},{"attributes":{},"id":"16bf673c-ed38-443d-87dd-11fe645b3e34","type":"BasicTicker"},{"attributes":{"plot":{"id":"04521cb6-c4cd-49ee-851a-ac348fd663ec","type":"Plot"},"ticker":{"id":"16bf673c-ed38-443d-87dd-11fe645b3e34","type":"BasicTicker"}},"id":"e118ae24-072c-45c4-8151-567cf6b29435","type":"Grid"},{"attributes":{"formatter":{"id":"74a79dcb-dde1-4510-aa95-c472840a7c40","type":"BasicTickFormatter"},"plot":{"id":"04521cb6-c4cd-49ee-851a-ac348fd663ec","type":"Plot"},"ticker":{"id":"5598811f-6c77-40b0-892c-ebaf20aa8493","type":"BasicTicker"}},"id":"57c3d5dc-b048-4baf-9801-f93a13be43ac","type":"LinearAxis"},{"attributes":{"data_source":{"id":"019e18f5-1047-4192-9ada-45586527f590","type":"ColumnDataSource"},"glyph":{"id":"082dcb41-6e7e-488a-a578-68126775537d","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"72f67efe-7c91-494d-a344-202e2ceb3dcb","type":"CDSView"}},"id":"a5bbe4e1-ab99-4df7-a02c-7f025f9f4902","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"019e18f5-1047-4192-9ada-45586527f590","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"be40777a-3326-4ea4-ad79-bc314133eaa7","type":"BasicTickFormatter"},"plot":{"id":"04521cb6-c4cd-49ee-851a-ac348fd663ec","type":"Plot"},"ticker":{"id":"16bf673c-ed38-443d-87dd-11fe645b3e34","type":"BasicTicker"}},"id":"13ff8d71-6ac0-4a7f-956b-6035e620c833","type":"LinearAxis"},{"attributes":{"below":[{"id":"13ff8d71-6ac0-4a7f-956b-6035e620c833","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"57c3d5dc-b048-4baf-9801-f93a13be43ac","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a5bbe4e1-ab99-4df7-a02c-7f025f9f4902","type":"GlyphRenderer"},{"id":"13ff8d71-6ac0-4a7f-956b-6035e620c833","type":"LinearAxis"},{"id":"57c3d5dc-b048-4baf-9801-f93a13be43ac","type":"LinearAxis"},{"id":"e118ae24-072c-45c4-8151-567cf6b29435","type":"Grid"},{"id":"39d15195-ba57-4d4c-96ff-676d6b3d71b5","type":"Grid"}],"title":null,"toolbar":{"id":"4472072f-07be-4344-9621-a95d217f008e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b83bbbbb-5cfa-4dcd-a54e-75585902bb38","type":"DataRange1d"},"x_scale":{"id":"df8f22fe-46a8-4cec-973b-c1c27bafa88b","type":"LinearScale"},"y_range":{"id":"ac755170-9eab-41d8-97cc-55f9cd74b58d","type":"DataRange1d"},"y_scale":{"id":"f659b5ac-2ae1-4e01-b79a-21ddefb99c23","type":"LinearScale"}},"id":"04521cb6-c4cd-49ee-851a-ac348fd663ec","type":"Plot"},{"attributes":{},"id":"f659b5ac-2ae1-4e01-b79a-21ddefb99c23","type":"LinearScale"}],"root_ids":["04521cb6-c4cd-49ee-851a-ac348fd663ec"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"eda21194-3068-4b22-93b2-0be715832bcf","elementid":"49e35ca7-d12e-4a35-83d0-38e66a651c98","modelid":"04521cb6-c4cd-49ee-851a-ac348fd663ec"}];
                
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
