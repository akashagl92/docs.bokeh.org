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
      };var element = document.getElementById("ae80c5d6-9c82-43ca-9cd4-38743f4c3ad1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ae80c5d6-9c82-43ca-9cd4-38743f4c3ad1' but no matching script tag was found. ")
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
                    var docs_json = {"07d109f3-ddc9-4f69-89be-b2c1b1c60e85":{"roots":{"references":[{"attributes":{},"id":"23299d11-87c6-4ff5-bb0d-2ae73efa2c8e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5989d2ba-04ed-4519-8f7a-81cdc43fe051","type":"BasicTickFormatter"},"plot":{"id":"64868567-648d-49f1-a397-dd57749bdb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e92a527-d163-4584-b060-252d58dca1bc","type":"BasicTicker"}},"id":"a8e52ca7-ffe6-4aa4-adad-c6ba85b1735a","type":"LinearAxis"},{"attributes":{},"id":"1e92a527-d163-4584-b060-252d58dca1bc","type":"BasicTicker"},{"attributes":{},"id":"071462d3-9d1d-4eb7-b679-2104ce6f34f1","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"4f0235e4-891a-47ae-9093-bb3c64e6efb3","type":"BoxAnnotation"}},"id":"bea3dc62-9e60-45e5-8eb1-8d7deb840760","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"58c4ac4d-e599-4c04-84bc-c18c04edd0eb","type":"ColumnDataSource"},{"attributes":{"source":{"id":"58c4ac4d-e599-4c04-84bc-c18c04edd0eb","type":"ColumnDataSource"}},"id":"f4056754-1dbb-4f95-bef7-82dcb422dfb0","type":"CDSView"},{"attributes":{"below":[{"id":"af8c4d2f-bb94-4db2-b75b-169bd61aed80","type":"LinearAxis"}],"left":[{"id":"a8e52ca7-ffe6-4aa4-adad-c6ba85b1735a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"af8c4d2f-bb94-4db2-b75b-169bd61aed80","type":"LinearAxis"},{"id":"08d99522-e462-4c67-9ac6-3b40f8c04397","type":"Grid"},{"id":"a8e52ca7-ffe6-4aa4-adad-c6ba85b1735a","type":"LinearAxis"},{"id":"c695a16e-1d3b-4e1d-ae78-fb6c305010b9","type":"Grid"},{"id":"4f0235e4-891a-47ae-9093-bb3c64e6efb3","type":"BoxAnnotation"},{"id":"3e8506c6-9a42-4278-b6b1-612ac1403c7b","type":"GlyphRenderer"}],"title":{"id":"0201ad4f-6b1d-4819-a71b-3522433fbeea","type":"Title"},"toolbar":{"id":"fa9ccb75-95fd-49e8-8128-a120f77efde1","type":"Toolbar"},"x_range":{"id":"30d4af01-e7a2-4b17-8668-f5f9100ff747","type":"DataRange1d"},"x_scale":{"id":"98ff3ae6-1216-4eb5-97c4-7daba56b5f56","type":"LinearScale"},"y_range":{"id":"4072abcd-a7d5-45e4-bced-f243eac9c7dd","type":"DataRange1d"},"y_scale":{"id":"f94b15bc-e2a3-497d-aeed-d6f510fddd15","type":"LinearScale"}},"id":"64868567-648d-49f1-a397-dd57749bdb43","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c112a722-0421-4606-96ef-3a4d7c0f5a16","type":"PanTool"},{"id":"40efd998-9240-4e34-84ef-3efef45abb61","type":"WheelZoomTool"},{"id":"bea3dc62-9e60-45e5-8eb1-8d7deb840760","type":"BoxZoomTool"},{"id":"e98cc1ee-8503-4a87-a877-29a35e101020","type":"SaveTool"},{"id":"dd71d4b7-ce73-413b-a8a5-93fade3c6686","type":"ResetTool"},{"id":"72a55950-5910-4791-a65b-95d40c2326b4","type":"HelpTool"}]},"id":"fa9ccb75-95fd-49e8-8128-a120f77efde1","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4f0235e4-891a-47ae-9093-bb3c64e6efb3","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"30d4af01-e7a2-4b17-8668-f5f9100ff747","type":"DataRange1d"},{"attributes":{},"id":"c112a722-0421-4606-96ef-3a4d7c0f5a16","type":"PanTool"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c599d274-73fc-4218-b562-67dcf625ab63","type":"MultiLine"},{"attributes":{"data_source":{"id":"58c4ac4d-e599-4c04-84bc-c18c04edd0eb","type":"ColumnDataSource"},"glyph":{"id":"c599d274-73fc-4218-b562-67dcf625ab63","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"80564023-877b-46bc-93cd-b55799c5d6b8","type":"MultiLine"},"selection_glyph":null,"view":{"id":"f4056754-1dbb-4f95-bef7-82dcb422dfb0","type":"CDSView"}},"id":"3e8506c6-9a42-4278-b6b1-612ac1403c7b","type":"GlyphRenderer"},{"attributes":{},"id":"98ff3ae6-1216-4eb5-97c4-7daba56b5f56","type":"LinearScale"},{"attributes":{},"id":"40efd998-9240-4e34-84ef-3efef45abb61","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"4072abcd-a7d5-45e4-bced-f243eac9c7dd","type":"DataRange1d"},{"attributes":{},"id":"e98cc1ee-8503-4a87-a877-29a35e101020","type":"SaveTool"},{"attributes":{},"id":"f94b15bc-e2a3-497d-aeed-d6f510fddd15","type":"LinearScale"},{"attributes":{},"id":"dd71d4b7-ce73-413b-a8a5-93fade3c6686","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"80564023-877b-46bc-93cd-b55799c5d6b8","type":"MultiLine"},{"attributes":{},"id":"72a55950-5910-4791-a65b-95d40c2326b4","type":"HelpTool"},{"attributes":{"plot":{"id":"64868567-648d-49f1-a397-dd57749bdb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"23299d11-87c6-4ff5-bb0d-2ae73efa2c8e","type":"BasicTicker"}},"id":"08d99522-e462-4c67-9ac6-3b40f8c04397","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"0201ad4f-6b1d-4819-a71b-3522433fbeea","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"64868567-648d-49f1-a397-dd57749bdb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e92a527-d163-4584-b060-252d58dca1bc","type":"BasicTicker"}},"id":"c695a16e-1d3b-4e1d-ae78-fb6c305010b9","type":"Grid"},{"attributes":{},"id":"5989d2ba-04ed-4519-8f7a-81cdc43fe051","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"071462d3-9d1d-4eb7-b679-2104ce6f34f1","type":"BasicTickFormatter"},"plot":{"id":"64868567-648d-49f1-a397-dd57749bdb43","subtype":"Figure","type":"Plot"},"ticker":{"id":"23299d11-87c6-4ff5-bb0d-2ae73efa2c8e","type":"BasicTicker"}},"id":"af8c4d2f-bb94-4db2-b75b-169bd61aed80","type":"LinearAxis"}],"root_ids":["64868567-648d-49f1-a397-dd57749bdb43"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"07d109f3-ddc9-4f69-89be-b2c1b1c60e85","elementid":"ae80c5d6-9c82-43ca-9cd4-38743f4c3ad1","modelid":"64868567-648d-49f1-a397-dd57749bdb43"}];
                
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
