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
      };var element = document.getElementById("5d845978-13b0-431b-b709-506b0f506478");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d845978-13b0-431b-b709-506b0f506478' but no matching script tag was found. ")
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
                    var docs_json = {"3d625b15-19fe-403c-9747-3dc806ec0b51":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"0f4660cf-0ca0-4b42-b506-2c7ec2a597d7","type":"CategoricalAxis"}],"left":[{"id":"16805b0f-7034-4b89-b4b8-030a3061d033","type":"LinearAxis"}],"renderers":[{"id":"0f4660cf-0ca0-4b42-b506-2c7ec2a597d7","type":"CategoricalAxis"},{"id":"ab815796-f004-4e03-97c7-294f710a6daf","type":"Grid"},{"id":"16805b0f-7034-4b89-b4b8-030a3061d033","type":"LinearAxis"},{"id":"1c2541a3-6d06-4963-938d-688c50572a3f","type":"Grid"},{"id":"cf80d675-575e-459c-91af-108b94a89bbf","type":"GlyphRenderer"},{"id":"18d7cf3b-b700-473b-b10f-b60d20227f78","type":"GlyphRenderer"},{"id":"d266408f-48e7-42c0-acba-bff89e91cbd4","type":"GlyphRenderer"},{"id":"f340721f-10b4-4dea-943e-67710fd5e748","type":"GlyphRenderer"},{"id":"0f85104d-e9dc-47ca-8969-c25fcca79237","type":"GlyphRenderer"},{"id":"e8b5e270-5ae8-46ba-a246-8f6ab11c240d","type":"GlyphRenderer"},{"id":"e5d0b611-f258-4662-bafa-97e1b1e1ce51","type":"GlyphRenderer"}],"title":{"id":"f7d35c9f-5e93-4ed0-af00-4bffceec315b","type":"Title"},"toolbar":{"id":"ca5a3504-706a-4d1f-b17a-421eaf062412","type":"Toolbar"},"x_range":{"id":"27084d9e-062c-4d51-9868-0cd1eb013613","type":"FactorRange"},"x_scale":{"id":"9dbad65e-7f15-44b7-bf25-6ff43c89486d","type":"CategoricalScale"},"y_range":{"id":"b796a28e-dd57-4af4-be92-26778c238acc","type":"DataRange1d"},"y_scale":{"id":"aa424d75-0111-4295-959b-3002259e69ba","type":"LinearScale"}},"id":"dc156611-ad67-4897-8980-c21e8c20be7e","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d90f6d81-051b-4432-9498-0fd1b760c715","type":"Rect"},{"attributes":{"source":{"id":"9bc4998d-1ed7-478d-b928-035174df1617","type":"ColumnDataSource"}},"id":"300453c6-9d05-41f1-b67d-cad727d6d215","type":"CDSView"},{"attributes":{"callback":null},"id":"b796a28e-dd57-4af4-be92-26778c238acc","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"d1ca0806-a943-4ac6-a974-71ca274e841a","type":"VBar"},{"attributes":{"data_source":{"id":"003de1d1-63f8-4bff-838f-e9f10ebff068","type":"ColumnDataSource"},"glyph":{"id":"ae77aff3-c6e4-496a-9c0d-0fb8b21f266f","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eaa6129e-ec50-4be1-b2f7-c21694fda177","type":"Segment"},"selection_glyph":null,"view":{"id":"ffe63a1d-1194-4604-b25d-d790049b76c1","type":"CDSView"}},"id":"18d7cf3b-b700-473b-b10f-b60d20227f78","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2de58e79-0126-4772-89b8-9ee7e7e84741","type":"Rect"},{"attributes":{"source":{"id":"dd0e688d-b2f9-4705-96b8-fe7deaf28a3c","type":"ColumnDataSource"}},"id":"803bccb7-857d-4467-b4fe-9fa27506c0c2","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"dc156611-ad67-4897-8980-c21e8c20be7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"27784088-5e38-4704-8c04-e9fa39263c68","type":"BasicTicker"}},"id":"1c2541a3-6d06-4963-938d-688c50572a3f","type":"Grid"},{"attributes":{},"id":"27784088-5e38-4704-8c04-e9fa39263c68","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d4e1fd34-1092-491d-8bc7-c9900723af02","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"dc156611-ad67-4897-8980-c21e8c20be7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb3b9066-fdab-4977-bf49-b058b5749bae","type":"CategoricalTicker"}},"id":"0f4660cf-0ca0-4b42-b506-2c7ec2a597d7","type":"CategoricalAxis"},{"attributes":{"source":{"id":"892e44a8-9b0f-40e6-b58a-65ae8891d245","type":"ColumnDataSource"}},"id":"5d2835b0-184c-4bf9-a7a2-27f2afd3aaf9","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"f7d35c9f-5e93-4ed0-af00-4bffceec315b","type":"Title"},{"attributes":{"data_source":{"id":"dd0e688d-b2f9-4705-96b8-fe7deaf28a3c","type":"ColumnDataSource"},"glyph":{"id":"2de58e79-0126-4772-89b8-9ee7e7e84741","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"405dd157-5acc-44cc-b76c-ed977e5ad3a4","type":"Rect"},"selection_glyph":null,"view":{"id":"803bccb7-857d-4467-b4fe-9fa27506c0c2","type":"CDSView"}},"id":"0f85104d-e9dc-47ca-8969-c25fcca79237","type":"GlyphRenderer"},{"attributes":{"source":{"id":"003de1d1-63f8-4bff-838f-e9f10ebff068","type":"ColumnDataSource"}},"id":"ffe63a1d-1194-4604-b25d-d790049b76c1","type":"CDSView"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"ae77aff3-c6e4-496a-9c0d-0fb8b21f266f","type":"Segment"},{"attributes":{"source":{"id":"887c95fe-e849-4f7c-a6e3-fd5e0867b991","type":"ColumnDataSource"}},"id":"c439d6c9-a096-4f63-be5a-9825b009b037","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"421c8b1a-8b56-45a8-931b-dd1c040bfc94","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","a","b","b","b","c","c","d","e","f"],"y":[2.7723086375773867,3.3244528351882803,2.6966019989244208,3.1364249181484385,2.615743569168125,3.7655799389637994,4.194500607201464,3.756838907911128,4.649084762714704,5.062233581298032]}},"id":"512b3cd8-e551-48a4-a393-b9c1dabd2bfc","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"wlHIcTffAsAbnLIdWU8BwC4VtJxIUfm/bPiUVslt979QHL3f2EDcv3Amm8vxmt+/","dtype":"float64","shape":[6]}}},"id":"dd0e688d-b2f9-4705-96b8-fe7deaf28a3c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"CImOcYou5T+GYXj6ICDjP0obOMyU6vo/Y0OkQsqm+j9ZiFYYJ/wEQIthgn5wpAVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"aI4m7qZFsb+Lyhny6emwvwhj2YpTaO8/gPXSDtH67z8FyGy8ROX/P/HVIs9okP8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"9bc4998d-1ed7-478d-b928-035174df1617","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"892e44a8-9b0f-40e6-b58a-65ae8891d245","type":"ColumnDataSource"},"glyph":{"id":"6442b670-f724-4f32-b6c2-6657a776dfd6","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d90f6d81-051b-4432-9498-0fd1b760c715","type":"Rect"},"selection_glyph":null,"view":{"id":"5d2835b0-184c-4bf9-a7a2-27f2afd3aaf9","type":"CDSView"}},"id":"e8b5e270-5ae8-46ba-a246-8f6ab11c240d","type":"GlyphRenderer"},{"attributes":{},"id":"8dd7ba98-b73e-441d-aad6-06c3408506f7","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"887c95fe-e849-4f7c-a6e3-fd5e0867b991","type":"ColumnDataSource"},"glyph":{"id":"2c35b66b-ab21-40b9-8142-e49cb5a2b7b0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"421c8b1a-8b56-45a8-931b-dd1c040bfc94","type":"VBar"},"selection_glyph":null,"view":{"id":"c439d6c9-a096-4f63-be5a-9825b009b037","type":"CDSView"}},"id":"f340721f-10b4-4dea-943e-67710fd5e748","type":"GlyphRenderer"},{"attributes":{},"id":"aa424d75-0111-4295-959b-3002259e69ba","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"3iTR/lUVBkDMXaFHq4ADQGuY5JcL5g1AEpfZUqfVDEAYdKjESGQSQPR849lZixNA","dtype":"float64","shape":[6]}}},"id":"892e44a8-9b0f-40e6-b58a-65ae8891d245","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8dd7ba98-b73e-441d-aad6-06c3408506f7","type":"BasicTickFormatter"},"plot":{"id":"dc156611-ad67-4897-8980-c21e8c20be7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"27784088-5e38-4704-8c04-e9fa39263c68","type":"BasicTicker"}},"id":"16805b0f-7034-4b89-b4b8-030a3061d033","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"dd2d7851-7235-4ced-a851-9385054b6a05","type":"VBar"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e4bd0c62-6e58-4d44-830d-16eb39e86dc7","type":"Segment"},{"attributes":{},"id":"cb3b9066-fdab-4977-bf49-b058b5749bae","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f174ecbe-93f9-448f-b98b-28e814a6e557","type":"SaveTool"}]},"id":"ca5a3504-706a-4d1f-b17a-421eaf062412","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"aI4m7qZFsb+Lyhny6emwvwhj2YpTaO8/gPXSDtH67z8FyGy8ROX/P/HVIs9okP8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"Q9PqlP6V579CAjvIkSHkvwqJXSei+9M/2/ATrXLk1z/pkLREwOf0P5qi/rXcBfQ/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"887c95fe-e849-4f7c-a6e3-fd5e0867b991","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9bc4998d-1ed7-478d-b928-035174df1617","type":"ColumnDataSource"},"glyph":{"id":"dd2d7851-7235-4ced-a851-9385054b6a05","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d1ca0806-a943-4ac6-a974-71ca274e841a","type":"VBar"},"selection_glyph":null,"view":{"id":"300453c6-9d05-41f1-b67d-cad727d6d215","type":"CDSView"}},"id":"d266408f-48e7-42c0-acba-bff89e91cbd4","type":"GlyphRenderer"},{"attributes":{},"id":"f174ecbe-93f9-448f-b98b-28e814a6e557","type":"SaveTool"},{"attributes":{},"id":"d4e1fd34-1092-491d-8bc7-c9900723af02","type":"CategoricalTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"eaa6129e-ec50-4be1-b2f7-c21694fda177","type":"Segment"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"27084d9e-062c-4d51-9868-0cd1eb013613","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6442b670-f724-4f32-b6c2-6657a776dfd6","type":"Rect"},{"attributes":{"data_source":{"id":"512b3cd8-e551-48a4-a393-b9c1dabd2bfc","type":"ColumnDataSource"},"glyph":{"id":"1783ce51-2609-4b14-bc0a-af2c9f344b17","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9516fd80-2885-4786-993e-f741ab27aa47","type":"Circle"},"selection_glyph":null,"view":{"id":"450e5d3a-78ce-48ba-9151-c41816beb916","type":"CDSView"}},"id":"e5d0b611-f258-4662-bafa-97e1b1e1ce51","type":"GlyphRenderer"},{"attributes":{},"id":"9dbad65e-7f15-44b7-bf25-6ff43c89486d","type":"CategoricalScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2068ef03-1873-4a6b-8bca-61229e23e00c","type":"Segment"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"2c35b66b-ab21-40b9-8142-e49cb5a2b7b0","type":"VBar"},{"attributes":{"data_source":{"id":"60023ca4-2a8d-45f5-91ee-5bf84531b23f","type":"ColumnDataSource"},"glyph":{"id":"e4bd0c62-6e58-4d44-830d-16eb39e86dc7","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2068ef03-1873-4a6b-8bca-61229e23e00c","type":"Segment"},"selection_glyph":null,"view":{"id":"fc688e67-0079-4406-90c3-2ad3565a6c3b","type":"CDSView"}},"id":"cf80d675-575e-459c-91af-108b94a89bbf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"3iTR/lUVBkDMXaFHq4ADQGuY5JcL5g1AEpfZUqfVDEAYdKjESGQSQPR849lZixNA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"CImOcYou5T+GYXj6ICDjP0obOMyU6vo/Y0OkQsqm+j9ZiFYYJ/wEQIthgn5wpAVA","dtype":"float64","shape":[6]}}},"id":"60023ca4-2a8d-45f5-91ee-5bf84531b23f","type":"ColumnDataSource"},{"attributes":{"source":{"id":"512b3cd8-e551-48a4-a393-b9c1dabd2bfc","type":"ColumnDataSource"}},"id":"450e5d3a-78ce-48ba-9151-c41816beb916","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"1783ce51-2609-4b14-bc0a-af2c9f344b17","type":"Circle"},{"attributes":{"source":{"id":"60023ca4-2a8d-45f5-91ee-5bf84531b23f","type":"ColumnDataSource"}},"id":"fc688e67-0079-4406-90c3-2ad3565a6c3b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"405dd157-5acc-44cc-b76c-ed977e5ad3a4","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"wlHIcTffAsAbnLIdWU8BwC4VtJxIUfm/bPiUVslt979QHL3f2EDcv3Amm8vxmt+/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"Q9PqlP6V579CAjvIkSHkvwqJXSei+9M/2/ATrXLk1z/pkLREwOf0P5qi/rXcBfQ/","dtype":"float64","shape":[6]}}},"id":"003de1d1-63f8-4bff-838f-e9f10ebff068","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9516fd80-2885-4786-993e-f741ab27aa47","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"dc156611-ad67-4897-8980-c21e8c20be7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb3b9066-fdab-4977-bf49-b058b5749bae","type":"CategoricalTicker"}},"id":"ab815796-f004-4e03-97c7-294f710a6daf","type":"Grid"}],"root_ids":["dc156611-ad67-4897-8980-c21e8c20be7e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"3d625b15-19fe-403c-9747-3dc806ec0b51","elementid":"5d845978-13b0-431b-b709-506b0f506478","modelid":"dc156611-ad67-4897-8980-c21e8c20be7e"}];
                
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
