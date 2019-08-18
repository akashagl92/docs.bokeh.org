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
      };var element = document.getElementById("a85c4ad5-107b-4142-b4f8-2715319ea358");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a85c4ad5-107b-4142-b4f8-2715319ea358' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"945943b4-7f82-42e2-a74f-58940857b68a":{"roots":{"references":[{"attributes":{},"id":"01fad5c9-ae5d-460c-83ce-7f5ebad5f7da","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"68bf8855-ec2d-430e-8921-c09b0fd50c5a","type":"Selection"},"selection_policy":{"id":"611681f5-3172-4356-8da5-055eddcc5074","type":"UnionRenderers"}},"id":"f8b6f948-0734-4936-aeac-e3aaceb05f61","type":"ColumnDataSource"},{"attributes":{},"id":"754de7b7-2970-4e33-95ea-1ef36c0b1b53","type":"BasicTickFormatter"},{"attributes":{},"id":"b678b177-885c-439e-96fd-1c5122875e95","type":"NodesOnly"},{"attributes":{"plot":{"id":"bf8f0538-87c5-43fa-97b7-1c70514e9a3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"100bbdc4-a325-40f8-a1b7-ea54d8ba12b0","type":"BasicTicker"}},"id":"a7da1d10-e090-47c5-92c1-c8867dcc4629","type":"Grid"},{"attributes":{"below":[{"id":"2e065bdf-63d9-4484-bf0d-da7c3bf60518","type":"LinearAxis"}],"left":[{"id":"e63e17f9-254c-4c45-be3e-cd5e3896b627","type":"LinearAxis"}],"renderers":[{"id":"2e065bdf-63d9-4484-bf0d-da7c3bf60518","type":"LinearAxis"},{"id":"a7da1d10-e090-47c5-92c1-c8867dcc4629","type":"Grid"},{"id":"e63e17f9-254c-4c45-be3e-cd5e3896b627","type":"LinearAxis"},{"id":"4d919a08-e693-4935-b7bb-2cd8a634760b","type":"Grid"},{"id":"18614a7b-1bff-4182-8a6e-2e6b89c26eaf","type":"GraphRenderer"}],"title":{"id":"60d6621f-666a-443e-81d7-9d6a6581258b","type":"Title"},"toolbar":{"id":"9a6d4a9f-6f50-472b-86d0-02f2791c6126","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"aa9e6b5b-caea-438c-88b0-e547bf24c3c7","type":"Range1d"},"x_scale":{"id":"a21e3e45-e136-40c8-9640-cd2761871f11","type":"LinearScale"},"y_range":{"id":"8edc6935-6a3d-408b-af04-2150a84f24a7","type":"Range1d"},"y_scale":{"id":"b3ede76e-4250-4f10-962d-a9e27d8941ad","type":"LinearScale"}},"id":"bf8f0538-87c5-43fa-97b7-1c70514e9a3b","subtype":"Figure","type":"Plot"},{"attributes":{"edge_renderer":{"id":"5aa68efd-d2e4-4607-97a5-fb7cb534bd65","type":"GlyphRenderer"},"inspection_policy":{"id":"c86ec7b1-2101-4304-a67b-35fdb6c39886","type":"NodesOnly"},"layout_provider":{"id":"8995610d-6755-4136-a51f-8caf12e8307a","type":"StaticLayoutProvider"},"node_renderer":{"id":"1351592c-049b-43d8-9f27-680efb43fe6c","type":"GlyphRenderer"},"selection_policy":{"id":"b678b177-885c-439e-96fd-1c5122875e95","type":"NodesOnly"}},"id":"18614a7b-1bff-4182-8a6e-2e6b89c26eaf","type":"GraphRenderer"},{"attributes":{},"id":"100bbdc4-a325-40f8-a1b7-ea54d8ba12b0","type":"BasicTicker"},{"attributes":{},"id":"1091d279-4a33-4dd6-aecf-3b5e71bc7934","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"8edc6935-6a3d-408b-af04-2150a84f24a7","type":"Range1d"},{"attributes":{"source":{"id":"f8b6f948-0734-4936-aeac-e3aaceb05f61","type":"ColumnDataSource"}},"id":"8e1bc1c6-938c-4f15-9e74-793238fe2818","type":"CDSView"},{"attributes":{},"id":"b3ede76e-4250-4f10-962d-a9e27d8941ad","type":"LinearScale"},{"attributes":{"graph_layout":{"0":[0.5379773753535892,0.5369335624763354],"1":[0.5777564659796115,-0.0035910811991215173],"10":[0.5651273922827387,1.1796870979561],"11":[1.3109853731410914,0.9091514374093256],"12":[1.0558906250318403,0.6558345254027526],"13":[0.27221487988064824,0.0019708085356381056],"14":[-0.24626993191019628,-1.1691021619469815],"15":[-0.8691449661825019,-1.1746628762936693],"16":[0.7579201182369639,2.0],"17":[1.1351178332737417,0.09580390785996162],"18":[-0.4642261688164294,-1.2774771257957658],"19":[0.04893754868708729,0.140390830123397],"2":[0.14595239067281454,-0.14992587583652817],"20":[-0.6516932029704725,-1.1743235804103962],"21":[1.09592661448874,0.33529959421308647],"22":[-0.9451500987829569,-0.9494002330231621],"23":[-1.0103781942616017,-0.33308339723259095],"24":[-1.027024328444145,0.4093545519162168],"25":[-1.2113777480427927,0.17423520959474684],"26":[-1.3083905943827305,-0.8804642296226994],"27":[-0.6949576392040903,-0.059005492047634715],"28":[-0.3812830176166347,-0.16466713914982406],"29":[-1.0728929708770039,-0.6736020509628993],"3":[0.6622617300651582,0.2510090924057568],"30":[0.058399256160896085,-0.5494651811847403],"31":[-0.48303428005305515,0.1124054805051927],"32":[-0.4989551071018625,-0.6920199987330554],"33":[-0.4805752553673711,-0.5699264266891322],"4":[0.8980522927326734,1.1644542007272505],"5":[0.5568423708966534,1.46875698121313],"6":[0.8012216550822854,1.4460217037986403],"7":[0.7804308544901942,-0.008596058104317923],"8":[-0.04182629892847309,-0.23098323623112121],"9":[0.12616502648558747,-0.8210128396738943]}},"id":"8995610d-6755-4136-a51f-8caf12e8307a","type":"StaticLayoutProvider"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"9a6d4a9f-6f50-472b-86d0-02f2791c6126","type":"Toolbar"},{"attributes":{"formatter":{"id":"01fad5c9-ae5d-460c-83ce-7f5ebad5f7da","type":"BasicTickFormatter"},"plot":{"id":"bf8f0538-87c5-43fa-97b7-1c70514e9a3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"100bbdc4-a325-40f8-a1b7-ea54d8ba12b0","type":"BasicTicker"}},"id":"2e065bdf-63d9-4484-bf0d-da7c3bf60518","type":"LinearAxis"},{"attributes":{"source":{"id":"862d58b3-c1ac-4938-bcd6-f075816e1d4f","type":"ColumnDataSource"}},"id":"a5b47c1d-d19a-4448-98e6-87e41d2ea53b","type":"CDSView"},{"attributes":{},"id":"611681f5-3172-4356-8da5-055eddcc5074","type":"UnionRenderers"},{"attributes":{},"id":"a21e3e45-e136-40c8-9640-cd2761871f11","type":"LinearScale"},{"attributes":{},"id":"c86ec7b1-2101-4304-a67b-35fdb6c39886","type":"NodesOnly"},{"attributes":{},"id":"68bf8855-ec2d-430e-8921-c09b0fd50c5a","type":"Selection"},{"attributes":{},"id":"d376bf48-4bb0-4aaa-8cf7-57600e1e7d8c","type":"MultiLine"},{"attributes":{"data_source":{"id":"f8b6f948-0734-4936-aeac-e3aaceb05f61","type":"ColumnDataSource"},"glyph":{"id":"d376bf48-4bb0-4aaa-8cf7-57600e1e7d8c","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8e1bc1c6-938c-4f15-9e74-793238fe2818","type":"CDSView"}},"id":"5aa68efd-d2e4-4607-97a5-fb7cb534bd65","type":"GlyphRenderer"},{"attributes":{},"id":"b975524a-48f7-4985-bdf3-7433ca1db72a","type":"Circle"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"60d6621f-666a-443e-81d7-9d6a6581258b","type":"Title"},{"attributes":{},"id":"79bd8319-a25e-47e4-95fc-a6159d1f1cb7","type":"Selection"},{"attributes":{"data_source":{"id":"862d58b3-c1ac-4938-bcd6-f075816e1d4f","type":"ColumnDataSource"},"glyph":{"id":"b975524a-48f7-4985-bdf3-7433ca1db72a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a5b47c1d-d19a-4448-98e6-87e41d2ea53b","type":"CDSView"}},"id":"1351592c-049b-43d8-9f27-680efb43fe6c","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"bf8f0538-87c5-43fa-97b7-1c70514e9a3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"086b68fe-96ce-498f-9817-880f3e3594c1","type":"BasicTicker"}},"id":"4d919a08-e693-4935-b7bb-2cd8a634760b","type":"Grid"},{"attributes":{"formatter":{"id":"754de7b7-2970-4e33-95ea-1ef36c0b1b53","type":"BasicTickFormatter"},"plot":{"id":"bf8f0538-87c5-43fa-97b7-1c70514e9a3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"086b68fe-96ce-498f-9817-880f3e3594c1","type":"BasicTicker"}},"id":"e63e17f9-254c-4c45-be3e-cd5e3896b627","type":"LinearAxis"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"aa9e6b5b-caea-438c-88b0-e547bf24c3c7","type":"Range1d"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"79bd8319-a25e-47e4-95fc-a6159d1f1cb7","type":"Selection"},"selection_policy":{"id":"1091d279-4a33-4dd6-aecf-3b5e71bc7934","type":"UnionRenderers"}},"id":"862d58b3-c1ac-4938-bcd6-f075816e1d4f","type":"ColumnDataSource"},{"attributes":{},"id":"086b68fe-96ce-498f-9817-880f3e3594c1","type":"BasicTicker"}],"root_ids":["bf8f0538-87c5-43fa-97b7-1c70514e9a3b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"945943b4-7f82-42e2-a74f-58940857b68a","roots":{"bf8f0538-87c5-43fa-97b7-1c70514e9a3b":"a85c4ad5-107b-4142-b4f8-2715319ea358"}}];
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