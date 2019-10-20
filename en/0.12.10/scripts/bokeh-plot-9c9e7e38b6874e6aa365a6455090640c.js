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
      };var element = document.getElementById("30eca145-e515-420a-b89e-38fcf13b409f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30eca145-e515-420a-b89e-38fcf13b409f' but no matching script tag was found. ")
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
                    var docs_json = {"1bb4f418-3761-4500-8b40-87e24414fc7d":{"roots":{"references":[{"attributes":{"data_source":{"id":"cf54fdeb-84d2-403d-8c16-3aa2b18abc69","type":"ColumnDataSource"},"glyph":{"id":"71d2cb02-2b45-4860-82cb-fb2a60bb8839","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29bbbcf4-00b9-4c72-a9e3-016644a496c2","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"7e12e95c-5283-4c3f-8cef-dc81d1ba36f0","type":"CDSView"}},"id":"3ae735bc-623c-4aaa-b59a-d1e12a6016d3","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"a32be698-516a-4b82-8cfd-45144f604322","subtype":"Figure","type":"Plot"},"ticker":{"id":"18c77e97-7717-4bbd-ae77-9c99fd59eaf7","type":"BasicTicker"}},"id":"31c04565-ee26-4dc5-b988-4542049fdcd6","type":"Grid"},{"attributes":{},"id":"35b62530-b8f8-4aaf-9af0-ec32d073feca","type":"LinearScale"},{"attributes":{},"id":"f2b08d55-d9e9-4255-9127-04233ebfe46e","type":"PanTool"},{"attributes":{"formatter":{"id":"25770ba4-cfb6-437e-a420-9dd19a15a33c","type":"BasicTickFormatter"},"plot":{"id":"a32be698-516a-4b82-8cfd-45144f604322","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7b03532-044a-483b-bb67-c9f480abde1a","type":"BasicTicker"}},"id":"682e6216-53d9-4746-b2d7-2649dd7a7458","type":"LinearAxis"},{"attributes":{},"id":"735d86a9-2e4f-4c33-a702-d322eb9ccf61","type":"ResetTool"},{"attributes":{},"id":"25770ba4-cfb6-437e-a420-9dd19a15a33c","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b4daed1f-6656-496e-b89c-1e113e375bca","type":"BoxAnnotation"},{"attributes":{},"id":"a7b03532-044a-483b-bb67-c9f480abde1a","type":"BasicTicker"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"71d2cb02-2b45-4860-82cb-fb2a60bb8839","type":"ImageRGBA"},{"attributes":{},"id":"ac3521b3-e2e4-489f-901f-1b46e876b1a7","type":"LinearScale"},{"attributes":{},"id":"291cf774-8044-4837-9c12-fe85a48435a7","type":"SaveTool"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"29bbbcf4-00b9-4c72-a9e3-016644a496c2","type":"ImageRGBA"},{"attributes":{"below":[{"id":"682e6216-53d9-4746-b2d7-2649dd7a7458","type":"LinearAxis"}],"left":[{"id":"d7e54017-1f30-42fd-9f8a-d5935d7508a2","type":"LinearAxis"}],"renderers":[{"id":"682e6216-53d9-4746-b2d7-2649dd7a7458","type":"LinearAxis"},{"id":"86f01c29-ae47-42d6-92a0-54a5de9698a2","type":"Grid"},{"id":"d7e54017-1f30-42fd-9f8a-d5935d7508a2","type":"LinearAxis"},{"id":"31c04565-ee26-4dc5-b988-4542049fdcd6","type":"Grid"},{"id":"b4daed1f-6656-496e-b89c-1e113e375bca","type":"BoxAnnotation"},{"id":"3ae735bc-623c-4aaa-b59a-d1e12a6016d3","type":"GlyphRenderer"}],"title":{"id":"06b678dc-4e78-415f-bb32-6ccf6b921c02","type":"Title"},"toolbar":{"id":"a26428fe-8bd7-4f5c-a429-a5baa72377e2","type":"Toolbar"},"x_range":{"id":"a64d2819-7224-4355-b12d-5a24331cc2de","type":"Range1d"},"x_scale":{"id":"35b62530-b8f8-4aaf-9af0-ec32d073feca","type":"LinearScale"},"y_range":{"id":"2c6e2f63-36be-4e76-b1d2-e22a23034634","type":"Range1d"},"y_scale":{"id":"ac3521b3-e2e4-489f-901f-1b46e876b1a7","type":"LinearScale"}},"id":"a32be698-516a-4b82-8cfd-45144f604322","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"cf54fdeb-84d2-403d-8c16-3aa2b18abc69","type":"ColumnDataSource"}},"id":"7e12e95c-5283-4c3f-8cef-dc81d1ba36f0","type":"CDSView"},{"attributes":{"callback":null,"end":10},"id":"2c6e2f63-36be-4e76-b1d2-e22a23034634","type":"Range1d"},{"attributes":{"callback":null,"column_names":["image"],"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]}},"id":"cf54fdeb-84d2-403d-8c16-3aa2b18abc69","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2b08d55-d9e9-4255-9127-04233ebfe46e","type":"PanTool"},{"id":"617568d0-ae12-4159-b13a-d4b444f2a3cb","type":"WheelZoomTool"},{"id":"02ec4bee-dfb5-45d7-af3c-00fc602dfe85","type":"BoxZoomTool"},{"id":"291cf774-8044-4837-9c12-fe85a48435a7","type":"SaveTool"},{"id":"735d86a9-2e4f-4c33-a702-d322eb9ccf61","type":"ResetTool"},{"id":"8ec0c2a9-6145-457c-9ab0-66f9e1efe265","type":"HelpTool"}]},"id":"a26428fe-8bd7-4f5c-a429-a5baa72377e2","type":"Toolbar"},{"attributes":{},"id":"d5132090-a7a5-4068-9ef2-a359a99c2db9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"a64d2819-7224-4355-b12d-5a24331cc2de","type":"Range1d"},{"attributes":{},"id":"8ec0c2a9-6145-457c-9ab0-66f9e1efe265","type":"HelpTool"},{"attributes":{"plot":{"id":"a32be698-516a-4b82-8cfd-45144f604322","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7b03532-044a-483b-bb67-c9f480abde1a","type":"BasicTicker"}},"id":"86f01c29-ae47-42d6-92a0-54a5de9698a2","type":"Grid"},{"attributes":{},"id":"18c77e97-7717-4bbd-ae77-9c99fd59eaf7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d5132090-a7a5-4068-9ef2-a359a99c2db9","type":"BasicTickFormatter"},"plot":{"id":"a32be698-516a-4b82-8cfd-45144f604322","subtype":"Figure","type":"Plot"},"ticker":{"id":"18c77e97-7717-4bbd-ae77-9c99fd59eaf7","type":"BasicTicker"}},"id":"d7e54017-1f30-42fd-9f8a-d5935d7508a2","type":"LinearAxis"},{"attributes":{},"id":"617568d0-ae12-4159-b13a-d4b444f2a3cb","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"b4daed1f-6656-496e-b89c-1e113e375bca","type":"BoxAnnotation"}},"id":"02ec4bee-dfb5-45d7-af3c-00fc602dfe85","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"06b678dc-4e78-415f-bb32-6ccf6b921c02","type":"Title"}],"root_ids":["a32be698-516a-4b82-8cfd-45144f604322"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"1bb4f418-3761-4500-8b40-87e24414fc7d","elementid":"30eca145-e515-420a-b89e-38fcf13b409f","modelid":"a32be698-516a-4b82-8cfd-45144f604322"}];
                
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
