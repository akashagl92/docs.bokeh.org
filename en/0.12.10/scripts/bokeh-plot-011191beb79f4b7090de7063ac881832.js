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
      };var element = document.getElementById("a0a69020-c670-415a-a460-00ef13b1d306");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0a69020-c670-415a-a460-00ef13b1d306' but no matching script tag was found. ")
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
                    var docs_json = {"df97b8a3-835d-4aa9-ade5-8fa68381fcef":{"roots":{"references":[{"attributes":{"overlay":{"id":"9dd93e1b-db61-406a-a4b3-ff5cd4366d75","type":"BoxAnnotation"}},"id":"2949f13f-7673-4718-9c84-d2c837e247aa","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"530cdc55-2448-487a-ba37-bb6bd6e7511a","type":"LinearAxis"}],"left":[{"id":"f85f0992-c9b8-4530-9c43-d3aabf4f14e9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"530cdc55-2448-487a-ba37-bb6bd6e7511a","type":"LinearAxis"},{"id":"47902cb2-c470-45a0-b85c-652998da96ee","type":"Grid"},{"id":"f85f0992-c9b8-4530-9c43-d3aabf4f14e9","type":"LinearAxis"},{"id":"ed5cc41c-d97a-4513-b4c5-ef64f0a70bb6","type":"Grid"},{"id":"9dd93e1b-db61-406a-a4b3-ff5cd4366d75","type":"BoxAnnotation"},{"id":"3250f8c0-1842-4bbe-a4da-1342801e78b0","type":"GlyphRenderer"}],"title":{"id":"03530f46-6739-483a-ac8b-c7a723336870","type":"Title"},"toolbar":{"id":"0c24c59a-b596-458b-a47b-ac2668fe51fd","type":"Toolbar"},"x_range":{"id":"b25dda12-eacf-436a-b695-49164bfad66c","type":"Range1d"},"x_scale":{"id":"a46571ec-a651-48b5-b7be-0a6567f30a6b","type":"LinearScale"},"y_range":{"id":"b9546b38-a7ab-4577-8335-180485868a65","type":"Range1d"},"y_scale":{"id":"1f50c25e-9135-41d7-8439-1b19ecd95390","type":"LinearScale"}},"id":"edacb1ed-7c11-401a-ab7b-2b9e6d6062c2","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70d0dd74-2f7c-48be-a830-aeb15a3df53f","type":"PanTool"},{"id":"d672821d-df69-4543-8b7c-7bed8da2fd6c","type":"WheelZoomTool"},{"id":"2949f13f-7673-4718-9c84-d2c837e247aa","type":"BoxZoomTool"},{"id":"d5996d93-8268-4b28-90e6-b9ad22beb2e0","type":"SaveTool"},{"id":"e93385e9-231b-4a77-9f8a-65852eb21b39","type":"ResetTool"},{"id":"4910b974-6e23-4c9d-be5e-4f844e9fefae","type":"HelpTool"}]},"id":"0c24c59a-b596-458b-a47b-ac2668fe51fd","type":"Toolbar"},{"attributes":{},"id":"e93385e9-231b-4a77-9f8a-65852eb21b39","type":"ResetTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7b1ab9c-2654-4681-a260-bd75b02c6107","type":"ImageRGBA"},{"attributes":{},"id":"1f50c25e-9135-41d7-8439-1b19ecd95390","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"03530f46-6739-483a-ac8b-c7a723336870","type":"Title"},{"attributes":{},"id":"0fe41169-d259-4a52-bdc3-e5d44cee9be6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"b25dda12-eacf-436a-b695-49164bfad66c","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9dd93e1b-db61-406a-a4b3-ff5cd4366d75","type":"BoxAnnotation"},{"attributes":{},"id":"a46571ec-a651-48b5-b7be-0a6567f30a6b","type":"LinearScale"},{"attributes":{},"id":"d5996d93-8268-4b28-90e6-b9ad22beb2e0","type":"SaveTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4aa014dd-6697-4188-b31d-df6c7b8056cb","type":"ImageRGBA"},{"attributes":{},"id":"4910b974-6e23-4c9d-be5e-4f844e9fefae","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["image","x","y","dw","dh"],"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]}},"id":"9138ad23-e1d2-49e3-81ab-c4527b3be3d3","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"edacb1ed-7c11-401a-ab7b-2b9e6d6062c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f24363c0-19a2-49bc-978f-7a544104a4b7","type":"BasicTicker"}},"id":"ed5cc41c-d97a-4513-b4c5-ef64f0a70bb6","type":"Grid"},{"attributes":{"formatter":{"id":"0fe41169-d259-4a52-bdc3-e5d44cee9be6","type":"BasicTickFormatter"},"plot":{"id":"edacb1ed-7c11-401a-ab7b-2b9e6d6062c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9a1394b-48b5-4ce3-930b-a541025ec043","type":"BasicTicker"}},"id":"530cdc55-2448-487a-ba37-bb6bd6e7511a","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"b9546b38-a7ab-4577-8335-180485868a65","type":"Range1d"},{"attributes":{"source":{"id":"9138ad23-e1d2-49e3-81ab-c4527b3be3d3","type":"ColumnDataSource"}},"id":"a3d099b7-6e28-4207-9111-61cf8c561f9f","type":"CDSView"},{"attributes":{"plot":{"id":"edacb1ed-7c11-401a-ab7b-2b9e6d6062c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9a1394b-48b5-4ce3-930b-a541025ec043","type":"BasicTicker"}},"id":"47902cb2-c470-45a0-b85c-652998da96ee","type":"Grid"},{"attributes":{},"id":"70d0dd74-2f7c-48be-a830-aeb15a3df53f","type":"PanTool"},{"attributes":{},"id":"b2a9c159-ad0f-4824-b1e2-6d2a4a3605eb","type":"BasicTickFormatter"},{"attributes":{},"id":"f9a1394b-48b5-4ce3-930b-a541025ec043","type":"BasicTicker"},{"attributes":{},"id":"d672821d-df69-4543-8b7c-7bed8da2fd6c","type":"WheelZoomTool"},{"attributes":{},"id":"f24363c0-19a2-49bc-978f-7a544104a4b7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b2a9c159-ad0f-4824-b1e2-6d2a4a3605eb","type":"BasicTickFormatter"},"plot":{"id":"edacb1ed-7c11-401a-ab7b-2b9e6d6062c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f24363c0-19a2-49bc-978f-7a544104a4b7","type":"BasicTicker"}},"id":"f85f0992-c9b8-4530-9c43-d3aabf4f14e9","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9138ad23-e1d2-49e3-81ab-c4527b3be3d3","type":"ColumnDataSource"},"glyph":{"id":"4aa014dd-6697-4188-b31d-df6c7b8056cb","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c7b1ab9c-2654-4681-a260-bd75b02c6107","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"a3d099b7-6e28-4207-9111-61cf8c561f9f","type":"CDSView"}},"id":"3250f8c0-1842-4bbe-a4da-1342801e78b0","type":"GlyphRenderer"}],"root_ids":["edacb1ed-7c11-401a-ab7b-2b9e6d6062c2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"df97b8a3-835d-4aa9-ade5-8fa68381fcef","elementid":"a0a69020-c670-415a-a460-00ef13b1d306","modelid":"edacb1ed-7c11-401a-ab7b-2b9e6d6062c2"}];
                
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
