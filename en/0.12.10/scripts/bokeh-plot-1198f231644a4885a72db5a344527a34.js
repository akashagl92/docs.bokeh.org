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
      };var element = document.getElementById("d3ff50f7-530c-46b5-8f81-a0151315fb73");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3ff50f7-530c-46b5-8f81-a0151315fb73' but no matching script tag was found. ")
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
                    var docs_json = {"79675814-2942-46ee-87d8-d756f2cfd969":{"roots":{"references":[{"attributes":{},"id":"825f1db1-3175-4fef-9477-6361bc9fb166","type":"BasicTicker"},{"attributes":{},"id":"abd454c3-b28c-4fd9-8b65-09104c07f57a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"08dd74c7-fc57-4bdd-bf36-9a22b836b021","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"274790dc-125c-4826-bbb3-9ba17dcb0530","subtype":"Figure","type":"Plot"},"ticker":{"id":"825f1db1-3175-4fef-9477-6361bc9fb166","type":"BasicTicker"}},"id":"b7900968-29c9-455b-a09e-8ac56b95df02","type":"Grid"},{"attributes":{"formatter":{"id":"584158d1-d2b2-4a00-9b3a-3010efb38ff8","type":"BasicTickFormatter"},"plot":{"id":"274790dc-125c-4826-bbb3-9ba17dcb0530","subtype":"Figure","type":"Plot"},"ticker":{"id":"abd454c3-b28c-4fd9-8b65-09104c07f57a","type":"BasicTicker"}},"id":"da7682db-d5c8-48bb-b744-4f37e8d913b2","type":"LinearAxis"},{"attributes":{},"id":"1c8b32f7-9406-4a29-a2ec-6587305b963a","type":"LinearScale"},{"attributes":{"data_source":{"id":"0183a388-0654-4dda-9f74-d0852903d8b2","type":"ColumnDataSource"},"glyph":{"id":"6352d3b5-c125-4441-bb2f-4c4d93a49ef7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"113f7510-2f6b-4950-8bcc-ffc75c8326fc","type":"Circle"},"selection_glyph":null,"view":{"id":"2f41f495-db38-4636-8497-d5ceb52d5f52","type":"CDSView"}},"id":"0a3d4147-74b7-4b25-a6d6-1282febad478","type":"GlyphRenderer"},{"attributes":{},"id":"aeec6256-0cd2-4063-b4bf-192c599f459a","type":"LinearScale"},{"attributes":{"formatter":{"id":"17b64cea-db2c-4346-810d-d87b3eba5b71","type":"BasicTickFormatter"},"plot":{"id":"274790dc-125c-4826-bbb3-9ba17dcb0530","subtype":"Figure","type":"Plot"},"ticker":{"id":"825f1db1-3175-4fef-9477-6361bc9fb166","type":"BasicTicker"}},"id":"70d1f0c8-cce5-4145-a037-f78bf5ce9c6b","type":"LinearAxis"},{"attributes":{},"id":"584158d1-d2b2-4a00-9b3a-3010efb38ff8","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"caadc330-cdcf-4283-aecb-d54583cc3fa6","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa638a51-8622-4f93-960b-04b942c60b35","type":"HoverTool"}]},"id":"cbc02dc6-4a10-442a-b1c9-a39647e14c62","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"113f7510-2f6b-4950-8bcc-ffc75c8326fc","type":"Circle"},{"attributes":{},"id":"17b64cea-db2c-4346-810d-d87b3eba5b71","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"274790dc-125c-4826-bbb3-9ba17dcb0530","subtype":"Figure","type":"Plot"},"ticker":{"id":"abd454c3-b28c-4fd9-8b65-09104c07f57a","type":"BasicTicker"}},"id":"37b79342-ff89-4e39-824e-e453ec2f09fb","type":"Grid"},{"attributes":{"source":{"id":"0183a388-0654-4dda-9f74-d0852903d8b2","type":"ColumnDataSource"}},"id":"2f41f495-db38-4636-8497-d5ceb52d5f52","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","desc","imgs","fonts"],"data":{"desc":["A","b","C","d","E"],"fonts":["<i>italics</i>","<pre>pre</pre>","<b>bold</b>","<small>small</small>","<del>del</del>"],"imgs":["https://bokeh.pydata.org/static/snake.jpg","https://bokeh.pydata.org/static/snake2.png","https://bokeh.pydata.org/static/snake3D.png","https://bokeh.pydata.org/static/snake4_TheRevenge.png","https://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0183a388-0654-4dda-9f74-d0852903d8b2","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6352d3b5-c125-4441-bb2f-4c4d93a49ef7","type":"Circle"},{"attributes":{"callback":null,"tooltips":"\n    <div>\n        <div>\n            <img\n                src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                style=\"float: left; margin: 0px 15px 15px 0px;\"\n                border=\"2\"\n            ></img>\n        </div>\n        <div>\n            <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n            <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n        </div>\n        <div>\n            <span>@fonts{safe}</span>\n        </div>\n        <div>\n            <span style=\"font-size: 15px;\">Location</span>\n            <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n        </div>\n    </div>\n    "},"id":"aa638a51-8622-4f93-960b-04b942c60b35","type":"HoverTool"},{"attributes":{"below":[{"id":"da7682db-d5c8-48bb-b744-4f37e8d913b2","type":"LinearAxis"}],"left":[{"id":"70d1f0c8-cce5-4145-a037-f78bf5ce9c6b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"da7682db-d5c8-48bb-b744-4f37e8d913b2","type":"LinearAxis"},{"id":"37b79342-ff89-4e39-824e-e453ec2f09fb","type":"Grid"},{"id":"70d1f0c8-cce5-4145-a037-f78bf5ce9c6b","type":"LinearAxis"},{"id":"b7900968-29c9-455b-a09e-8ac56b95df02","type":"Grid"},{"id":"0a3d4147-74b7-4b25-a6d6-1282febad478","type":"GlyphRenderer"}],"title":{"id":"b914b4f9-8014-45db-bd37-78995c35d35a","type":"Title"},"toolbar":{"id":"cbc02dc6-4a10-442a-b1c9-a39647e14c62","type":"Toolbar"},"x_range":{"id":"caadc330-cdcf-4283-aecb-d54583cc3fa6","type":"DataRange1d"},"x_scale":{"id":"1c8b32f7-9406-4a29-a2ec-6587305b963a","type":"LinearScale"},"y_range":{"id":"08dd74c7-fc57-4bdd-bf36-9a22b836b021","type":"DataRange1d"},"y_scale":{"id":"aeec6256-0cd2-4063-b4bf-192c599f459a","type":"LinearScale"}},"id":"274790dc-125c-4826-bbb3-9ba17dcb0530","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"b914b4f9-8014-45db-bd37-78995c35d35a","type":"Title"}],"root_ids":["274790dc-125c-4826-bbb3-9ba17dcb0530"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"79675814-2942-46ee-87d8-d756f2cfd969","elementid":"d3ff50f7-530c-46b5-8f81-a0151315fb73","modelid":"274790dc-125c-4826-bbb3-9ba17dcb0530"}];
                
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
