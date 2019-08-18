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
      };var element = document.getElementById("a85dcec7-e82c-4217-b689-3508e658d5a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a85dcec7-e82c-4217-b689-3508e658d5a8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5654f7d1-8e9e-40af-8a9d-4c6c88c826a9":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"b2fb3c20-bd06-4ad0-b443-75f80bc15df2","type":"Range1d"},{"attributes":{"below":[{"id":"401d0bbd-45ca-413e-b284-70c378a1be98","type":"LinearAxis"}],"left":[{"id":"0dc21940-28ec-457b-b0f9-194de5503d62","type":"LinearAxis"}],"renderers":[{"id":"401d0bbd-45ca-413e-b284-70c378a1be98","type":"LinearAxis"},{"id":"f70d3748-317b-4915-8aa9-31990d92c22f","type":"Grid"},{"id":"0dc21940-28ec-457b-b0f9-194de5503d62","type":"LinearAxis"},{"id":"fcd9b725-a598-4500-9d64-2144528313b7","type":"Grid"},{"id":"4c832d2d-911d-46b3-b3f9-f6e6029a1bd4","type":"BoxAnnotation"},{"id":"116a9b4a-a8e6-4c88-92b5-b673253ca664","type":"GlyphRenderer"}],"title":{"id":"cd28ac92-86a7-4003-9d72-94c2020fe5cf","type":"Title"},"toolbar":{"id":"bf022cf8-06eb-431f-9088-ff2cb7225fc0","type":"Toolbar"},"x_range":{"id":"9663ec3d-3e91-41ae-8e56-a3c19557f867","type":"Range1d"},"x_scale":{"id":"acfb5d15-2f99-41ff-a767-2db1bed212b0","type":"LinearScale"},"y_range":{"id":"b2fb3c20-bd06-4ad0-b443-75f80bc15df2","type":"Range1d"},"y_scale":{"id":"d3246464-5591-4c2c-a85f-375026fc8ec8","type":"LinearScale"}},"id":"a0535856-744d-4817-8f2d-5a2532a39924","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e2467c43-12c6-44a5-8092-6bc15bfe8616","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2482db3e-4b27-4d8d-a50b-f1f8f63d18c0","type":"PanTool"},{"id":"e2467c43-12c6-44a5-8092-6bc15bfe8616","type":"WheelZoomTool"},{"id":"79ceff90-a313-40c6-90e6-2e576559b41a","type":"BoxZoomTool"},{"id":"8a042d6d-13c8-4cfa-b10f-7caec7275ff3","type":"SaveTool"},{"id":"b8411168-4434-4846-8420-2afe4835fc65","type":"ResetTool"},{"id":"68758cc2-9db3-44d7-a3a2-202d4f73fec0","type":"HelpTool"}]},"id":"bf022cf8-06eb-431f-9088-ff2cb7225fc0","type":"Toolbar"},{"attributes":{},"id":"d3246464-5591-4c2c-a85f-375026fc8ec8","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"cd28ac92-86a7-4003-9d72-94c2020fe5cf","type":"Title"},{"attributes":{"source":{"id":"0db043e1-d767-43be-a145-35b138a89940","type":"ColumnDataSource"}},"id":"c6a18592-9591-4916-941e-bc10fd15c76a","type":"CDSView"},{"attributes":{"callback":null,"end":10},"id":"9663ec3d-3e91-41ae-8e56-a3c19557f867","type":"Range1d"},{"attributes":{},"id":"1367c50d-eeca-402e-a809-5e8a2f688163","type":"Selection"},{"attributes":{},"id":"abd0218e-571a-4ef2-a758-228efd27862b","type":"BasicTickFormatter"},{"attributes":{},"id":"8a042d6d-13c8-4cfa-b10f-7caec7275ff3","type":"SaveTool"},{"attributes":{},"id":"68758cc2-9db3-44d7-a3a2-202d4f73fec0","type":"HelpTool"},{"attributes":{},"id":"2482db3e-4b27-4d8d-a50b-f1f8f63d18c0","type":"PanTool"},{"attributes":{"formatter":{"id":"69774dc6-fc86-4809-a0cb-e791e25d9b36","type":"BasicTickFormatter"},"plot":{"id":"a0535856-744d-4817-8f2d-5a2532a39924","subtype":"Figure","type":"Plot"},"ticker":{"id":"e944b290-705b-4d0f-b20c-9736cff65d33","type":"BasicTicker"}},"id":"401d0bbd-45ca-413e-b284-70c378a1be98","type":"LinearAxis"},{"attributes":{},"id":"e944b290-705b-4d0f-b20c-9736cff65d33","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a0535856-744d-4817-8f2d-5a2532a39924","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d4ed7b1-e231-4a1a-adec-0acec930148d","type":"BasicTicker"}},"id":"fcd9b725-a598-4500-9d64-2144528313b7","type":"Grid"},{"attributes":{"data_source":{"id":"0db043e1-d767-43be-a145-35b138a89940","type":"ColumnDataSource"},"glyph":{"id":"74872a4a-0911-4d6d-8db6-556e537c15f2","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85669f96-b146-492d-b5d3-5cc40ab19764","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"c6a18592-9591-4916-941e-bc10fd15c76a","type":"CDSView"}},"id":"116a9b4a-a8e6-4c88-92b5-b673253ca664","type":"GlyphRenderer"},{"attributes":{},"id":"6d4ed7b1-e231-4a1a-adec-0acec930148d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4c832d2d-911d-46b3-b3f9-f6e6029a1bd4","type":"BoxAnnotation"},{"attributes":{},"id":"b8411168-4434-4846-8420-2afe4835fc65","type":"ResetTool"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"85669f96-b146-492d-b5d3-5cc40ab19764","type":"ImageRGBA"},{"attributes":{"plot":{"id":"a0535856-744d-4817-8f2d-5a2532a39924","subtype":"Figure","type":"Plot"},"ticker":{"id":"e944b290-705b-4d0f-b20c-9736cff65d33","type":"BasicTicker"}},"id":"f70d3748-317b-4915-8aa9-31990d92c22f","type":"Grid"},{"attributes":{},"id":"790ad01d-011c-423a-8c91-efeeec5f4c93","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"abd0218e-571a-4ef2-a758-228efd27862b","type":"BasicTickFormatter"},"plot":{"id":"a0535856-744d-4817-8f2d-5a2532a39924","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d4ed7b1-e231-4a1a-adec-0acec930148d","type":"BasicTicker"}},"id":"0dc21940-28ec-457b-b0f9-194de5503d62","type":"LinearAxis"},{"attributes":{},"id":"acfb5d15-2f99-41ff-a767-2db1bed212b0","type":"LinearScale"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"74872a4a-0911-4d6d-8db6-556e537c15f2","type":"ImageRGBA"},{"attributes":{"callback":null,"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]},"selected":{"id":"1367c50d-eeca-402e-a809-5e8a2f688163","type":"Selection"},"selection_policy":{"id":"790ad01d-011c-423a-8c91-efeeec5f4c93","type":"UnionRenderers"}},"id":"0db043e1-d767-43be-a145-35b138a89940","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4c832d2d-911d-46b3-b3f9-f6e6029a1bd4","type":"BoxAnnotation"}},"id":"79ceff90-a313-40c6-90e6-2e576559b41a","type":"BoxZoomTool"},{"attributes":{},"id":"69774dc6-fc86-4809-a0cb-e791e25d9b36","type":"BasicTickFormatter"}],"root_ids":["a0535856-744d-4817-8f2d-5a2532a39924"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5654f7d1-8e9e-40af-8a9d-4c6c88c826a9","roots":{"a0535856-744d-4817-8f2d-5a2532a39924":"a85dcec7-e82c-4217-b689-3508e658d5a8"}}];
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